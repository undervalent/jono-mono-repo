import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${media.greaterThan("large")`
    display: flex;
  `}
`;

export const ContentWrapper = styled.div`
  padding: 10.4rem 2.4rem 3.2rem 2.4rem;

  ${media.between("medium", "large")`
  padding-left: 4.8rem;
  padding-right: 4.8rem;
`}
  ${media.greaterThan("large")`
  width: 73rem;
  margin-left: 25.2rem;
`}
`;
