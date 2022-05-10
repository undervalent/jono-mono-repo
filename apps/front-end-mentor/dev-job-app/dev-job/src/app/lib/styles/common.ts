import styled from "styled-components";
import media from "styled-media-query";

export const ContentWrapper = styled.section`
  margin-left: 2.4rem;
  margin-right: 2.4rem;

  ${media.greaterThan("medium")`
    max-width: 68.9rem;
    margin-left: auto;
    margin-right: auto;
  `}
  ${media.greaterThan("large")`
    max-width: 111rem;
  `}
`;
