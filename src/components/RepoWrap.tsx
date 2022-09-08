import { useCallback, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchRecommendations } from "../lib/supabase";
import locationsHash from "../lib/locationsHash";
import useSupabaseAuth from "../hooks/useSupabaseAuth";
import HotRepositories from "./HotRepositories";
import ListRepositories from "./ListRepositories";
import SecondaryNav from "./SecondaryNav";
import { useRepositoriesList } from "../hooks/useRepositoriesList";

interface StringByString {
  [key: string]: string;
}

let orderBy: StringByString

orderBy = {
  popular: "stars",
  recent: "created_at",
  upvoted: "votesCount",
  discussed: "issues",
};
export declare interface PostWrapProps {
  textToSearch?: string;
}

const parseLimitValue = (limit: string | null): number => {
  if (!limit) {
    return 25;
  }
  const value = parseInt(limit);

  if (isNaN(value) || value <= 0) {
    return 25;
  }
  if (value > 100) {
    return 125;
  }
  return value;
};

const RepoWrap = ({ textToSearch }: PostWrapProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useSupabaseAuth();
  const location = useLocation();

  const activeLink = locationsHash[location.pathname] ?? "popular";
  const {data, meta, isLoading} = useRepositoriesList(orderBy[activeLink]);
  const limit = parseLimitValue(searchParams.get("limit"));
  const handleLoadingMore = () => {
    setSearchParams({ limit: String(limit + 25) });
  };

  return (
    <div className="bg-darkestGrey">
      <SecondaryNav
        activeLink={activeLink}
        user={user}
      />

      <HotRepositories />

      {!isLoading && <ListRepositories
        activeLink={activeLink}
        fetchedData={data}
        handleLoadingMore={handleLoadingMore}
        limit={limit}
      />}
    </div>
  );
};

export default RepoWrap;
