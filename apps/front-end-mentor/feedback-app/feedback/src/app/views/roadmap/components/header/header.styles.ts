import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.header`
  height: 10rem;
  background: var(--dark-alpha);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.6rem 2.4rem;

  ${media.greaterThan("small")`
  border-radius: 1rem;
`}
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Headline = styled.h1`
  color: var(--light-alpha);
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  letter-spacing: -0.025rem;
  order: 2;
`;
