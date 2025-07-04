import React from 'react';
import { useFetchGithubUser } from '../../services';
import * as Styled from './search.styles';
import { FiSearch } from 'react-icons/fi';

function useSearchData(): [any, any] {
  const [{ error }, { setUsername }] = useFetchGithubUser();
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const user = data.get('search-github')?.toString() || '';
    if (user) {
      setUsername(user);
    }
  };
  return [{ error }, { handleFormSubmit }];
}

export function Search() {
  const [{ error }, { handleFormSubmit }] = useSearchData();
  return (
    <Styled.Wrapper onSubmit={handleFormSubmit}>
      <FiSearch size="50px" color="#0079FF" />
      <Styled.Input
        type="search"
        name="search-github"
        aria-label="search github"
        placeholder="search github username..."
      />
      <Styled.ErrorMessage>{error}</Styled.ErrorMessage>
      <Styled.SearchButton type="submit">Search</Styled.SearchButton>
    </Styled.Wrapper>
  );
}
