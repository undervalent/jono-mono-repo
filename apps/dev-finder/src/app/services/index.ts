import React from 'react';
import { GithubInt } from '../types';
import { getUsername, setUsername } from '../state/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useGetDevQuery } from '../state/services';

export function useFetchGithubUser() {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetDevQuery(username);
  return [
    { data, error, isLoading },
    { setUsername: (username: string) => dispatch(setUsername(username)) },
  ];
}
