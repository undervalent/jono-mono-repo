import styled from "styled-components";

export const Wrapper = styled.section`
  border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  padding: 2.4rem 0;
  &:last-child {
    border-color: transparent;
    padding-bottom: 0;
  }
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

interface IContentProps {
  hasReplies?: boolean;
}
export const Content = styled.p<IContentProps>`
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: var(--dark-charlie);
`;
