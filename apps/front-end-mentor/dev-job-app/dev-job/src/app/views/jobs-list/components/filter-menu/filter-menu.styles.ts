import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  border-radius: 6px;
  min-height: 8rem;
  padding: 0 1.6rem;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};
  ${media.greaterThan("medium")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`};
`;

export const SelectMenu = styled.div`
  display: none;
  padding: 2rem;
  border-right: 1px solid rgba(110, 128, 152, 0.2);
  border-left: 1px solid rgba(110, 128, 152, 0.2);
  min-width: 21.5rem;
  ${media.greaterThan("medium")`
    display: block;
`};
  ${media.greaterThan("large")`
    max-width: 30rem;
`};
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  ${media.greaterThan("medium")`
    margin-right: 1rem;
    padding-right: 1rem;
    `};
  ${media.greaterThan("large")`
    max-width: 46rem;
  `};
`;



export const SearchButtonWrapper = styled.div`
  display: none;
  padding: 0 2rem;
  max-width: 34.6rem;
  justify-content: space-between;
  align-items: center;
  min-width: 25rem;

  ${media.greaterThan("medium")`
    display: flex;
  `};
`;

export const SingleWord = styled.span`
  display: none;
  ${media.greaterThan("large")`
    display: inline-block;
  `};
`;
