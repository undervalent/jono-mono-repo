import styled, { createGlobalStyle } from "styled-components";
import media from "styled-media-query";
import { CSSReset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${CSSReset}

:root {
  --primary-alpha: #ad1fea;
  --primary-bravo: #4661e6;
  --primary-charlie: #F49F85;;
  --primary-delta: #62BCFA;


  --light-alpha: #fff;
  --light-bravo: #f2f4ff;
  --light-charlie: #f7f8fd;



  --danger-alpha: #D73737;
  --danger-bravo: #E98888;

  --dark-alpha: #373F68;
  --dark-bravo: #3A4374;
  --dark-charlie: #647196;
}
h1,
  h2,
  h3,
  h4 {
    font-weight: 700;
    margin: 0;
    padding: 0;
    color: var(--dark-bravo)
  }
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 2.4rem;
    line-height: 3.5rem;
    letter-spacing: -0.33rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.9rem;
    letter-spacing: -0.025rem;
  }

  h3 {
    font-size: 1.8rem;
    line-height: 2.9rem;
    letter-spacing: -0.25rem;
  }
  h4 {
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.02rem;
  }
`;

export const ContentWrapper = styled.section`
  padding: 2.4rem;
  margin: auto;
  ${media.greaterThan("small")`
  padding: 0;
  max-width: 68.9rem;

  `}
  ${media.greaterThan("medium")`
  max-width: 73rem;

`}
`;

export const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 100rem;
`;
