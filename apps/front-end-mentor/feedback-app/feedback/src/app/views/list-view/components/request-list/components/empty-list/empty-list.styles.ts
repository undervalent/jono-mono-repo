import styled from "styled-components";
import media from "styled-media-query";

export const EmptyListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 46rem;
  background: var(--light-alpha);
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2.4rem;
  gap: 2rem;

  ${media.greaterThan("small")`

  `}
`;
