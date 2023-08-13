import React from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { usernameState } from "../state";
import { GithubInt } from "../types";
import { getPreviousData } from "./utils";

function fetchGithubUser({ queryKey }: { queryKey: string[] }) {
  const [, username] = queryKey;
  return axios.get<GithubInt>(`https://api.github.com/users/${username}`);
}

export function useFetchGithubUser() {
  const username = useRecoilValue(usernameState);
  const queryClient = useQueryClient();
  const [previousItem, setPreviousItem] = React.useState();

  const { data, isLoading, error } = useQuery({
    queryFn: fetchGithubUser,
    queryKey: ["user", username],
    retry: false,
    staleTime: Infinity,
    onSettled: (data, error) => {
      const queryCache = queryClient.getQueriesData(["user"]);
      if (error && !data) {
        const previous = getPreviousData(queryCache);
        setPreviousItem(previous.data);
      }
    },
  });

  const state = {
    data: data?.data || previousItem,
    isLoading,
    error: error && "No results",
  };

  return [state];
}
