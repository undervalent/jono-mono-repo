import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0 0 2.4rem 2.4rem;
  margin-top: 2.4rem;
`;
export const Header = styled.header`
  display: grid;
  grid-template-columns: 5.6rem 2fr 3.3rem;
  grid-template-rows: 4rem 1fr;
  gap: 1.6rem;
`;
export const Headline = styled.h3`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.9rem;
  letter-spacing: -0.0180556rem;
  color: var(--dark-bravo);
`;
export const Username = styled.span`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: var(--dark-charlie);
`;

export const Content = styled.p`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: var(--dark-charlie);
`;

export const Replying = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: var(--primary-alpha);
`;
