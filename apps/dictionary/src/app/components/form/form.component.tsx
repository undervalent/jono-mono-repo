import React from 'react'
import * as Styled from './form.styles';
import { FiSearch } from "react-icons/fi";

import { useForm } from './hook'


export const Form = () => {
  const [{  query, formError }, { handleFormSubmit, handleInputChange }] = useForm();

  return (
    <Styled.Wrapper onSubmit={handleFormSubmit} >
      <Styled.Input
        type="search"
        name="search"
        aria-label="search"
        placeholder="search for any word"
        value={query}
        onChange={handleInputChange}
        hasError={Boolean(formError)}
      />
      <Styled.IconWrapper>
      <FiSearch size="15px" color="#a445ed" />
      </Styled.IconWrapper>
      <Styled.ErrorMessage>{formError}</Styled.ErrorMessage>
    </Styled.Wrapper>
  );
}

