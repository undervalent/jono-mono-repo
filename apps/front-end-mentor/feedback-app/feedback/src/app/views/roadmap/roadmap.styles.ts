import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${media.greaterThan("small")`
    width: 68.9rem;
    margin: 2.8em auto 0 auto;
  `}
  ${media.greaterThan("large")`
    width: 111rem;
`}
`;
