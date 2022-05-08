import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    margin: 4rem auto 0 auto;
    max-width: 68.9rem;
    gap: 3rem;
  `}

  ${media.greaterThan("large")`
    max-width: 111rem;
    flex-direction: row;
  `}
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
