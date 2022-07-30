import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { User } from "@supabase/supabase-js";
import { UserCredentials } from "@supabase/gotrue-js/src/lib/types";

const useSupabaseAuth = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const currentUser = supabase.auth.session();
    currentUser?.user && setUser(currentUser?.user ?? null);

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      session?.user && setUser(session?.user ?? null);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  return {
    signIn: async (data: UserCredentials) => supabase.auth.signIn(data, {
      redirectTo: import.meta.env.BASE_URL,
    }),
    signOut: async () => supabase.auth.signOut(),
    user,
  };
};

export default useSupabaseAuth;
