import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  background: #ffffff;
  border-radius: 1rem;
  padding: 2.4rem;
  margin-top: 2.4rem;
`;
export const Header = styled.header`
  margin-bottom: 2.4rem;
`;
export const Footer = styled.footer`
  margin-top: 1.3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;

  ${media.greaterThan("small")`
  grid-template-columns: 1fr 14.2rem;
`}
`;
