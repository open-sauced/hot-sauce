import { createClient } from '@supabase/supabase-js';
import fetchContributorNames from './contributorHelper';
import isValidRepoUrl from './validateUrl';
import api from './persistedGraphQL';

export const supabase = createClient(import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_API_KEY);

export async function fetchVotesByRepo(repoName) {
  const { data: recommendations, error } = await supabase
    .from('recommendations')
    .select('votes, issues')
    .eq('repo_name', repoName);

  console.error(error);

  return recommendations[0].votes ? recommendations[0].votes : 0;
}

export async function fetchRepoByRepoName(repoName) {
  const { data: recommendations, error } = await supabase
    .from('recommendations')
    .select('votes, avg_recency_score')
    .eq('repo_name', repoName);

  console.error(error);

  return recommendations[0];
}

export async function authenticatedRecommendation(userId, repoUrl) {
  const [isValid, repoName] = isValidRepoUrl(repoUrl);

  // TODO: check if repo is already in the database
  // TODO: upvote if already in the database or if valid + submitted
  // TODO: Add to the most recent recommendation list if valid + submitted

  if (!isValid) {
    return;
  }

  const { owner, repo } = repoName;
  const { data } = await api.persistedRepoDataFetch({ owner, repo });
  const {
    contributors_oneGraph: contributorsOG,
    description,
    stargazers,
    issues,
    id,
  } = data.gitHub.repositoryOwner.repository;

  const contributorNames = await fetchContributorNames(contributorsOG.nodes)

  const { error } = await supabase
    .from('user_submissions')
    .upsert([
      {
        user_id: userId,
        repo_name: repoName,
        code: `${userId}-${repoName}`,
        contributors: contributorNames.slice(0,2), // grab first two names only
        recency_score: 0,
        issues: issues.total_count,
        stargazers: stargazers.total_count,
        description,
        repo_id: id,
      }], {
      onConflict: 'code',
    });
    // console.log(error);
}

export async function authenticatedVote(userId, repoName) {
  const { error } = await supabase
    .from('votes')
    .upsert([
      {
        github_user_id: userId,
        repo_name: repoName,
        code: `${userId}-${repoName}`,
      }], {
      onConflict: 'code',
    });

  // check error as duplicating is disabled now
  if (error && error.code === '23505') {
    await supabase
      .from('votes')
      .delete()
      .eq('vote_code', `${userId}-${repoName}`);

    return -1;
  }

  return 1;
}

export async function updateVotesByRepo(repoName, votes, user) {
  const githubId = user.user_metadata.sub;

  const voteTally = await authenticatedVote(githubId, repoName);

  const { data: recommendations, error } = await supabase
    .from('recommendations')
    .update({ votes: votes + voteTally })
    .eq('repo_name', repoName);

  console.error(error);

  return recommendations[0].votes;
}

export async function fetchRecommendations(orderBy = 'total_stars', limit = 25) {
  const { data: recommendations, error } = await supabase
    .from('recommendations')
    .select('repo_name, description, stars, issues, total_stars, avg_recency_score, contributors, votes')
    .limit(limit)
    .order(orderBy, { ascending: false });

  console.error(error);

  return recommendations;
}

export async function fetchMyVotes(user) {
  const githubId = user.user_metadata.sub;

  // First get the users votes
  const { data: votes } = await supabase
    .from('votes')
    .select('repo_name')
    .like('code', `${githubId}-%`);

  /**
   * Then get the recommendations based on the repo_name
   * Ideally this would be one query but we currently can
   * do joins when a foreign key exists
  */
  const { data: votedRepos, error } = await supabase
    .from('recommendations')
    .select()
    .in('repo_name', votes.map((v) => v.repo_name))
    .order('votes', { ascending: false });

  if (error) console.error(error);
  return votedRepos;
}
