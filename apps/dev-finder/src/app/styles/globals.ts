import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { CSSReset } from '.';

export const lightTheme = {
  background: 'var(--grey-secondary)',
  contentBackground: 'var(--white)',
  button: 'var(--primary)',
  hover: 'var(--secondary)',
  text: 'var(--secondary)',
  date: 'var(--grey-primary)',
  headers: 'var(--dark-primary)',
  username: 'var(--primary)',
  themeButton: 'var(--secondary)',
  themeButtonHover: '#222731',
};
export const darkTheme = {
  background: '#141d2f',
  contentBackground: 'var(--dark-secondary)',
  button: 'var(--primary)',
  hover: 'var(--secondary)',
  text: 'var(--white)',
  date: 'var(--white)',
  headers: 'var(--white)',
  username: 'var(--primary)',
  themeButton: 'var(--white)',
  themeButtonHover: '#90a4d4',
};

export type ThemeType = typeof lightTheme;

export type ThemeProps = {
  theme: ThemeType;
};

export const theme: DefaultTheme = lightTheme;

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

${CSSReset}
:root {
  --primary: #0079ff;
  --secondary: #4b6a9b;

  --grey-primary: #697c9a;
  --grey-secondary: #f6f8ff;

  --white: #fff;
  --black: #141d2f;

  --dark-primary: #2b3442;
  --dark-secondary: #1e2a47;

  --danger: #f74646;

}
  body {
    background: ${({ theme }: any) => theme.background};
    color: ${({ theme }: any) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-family: 'Space Mono', monospace;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }: any) => theme.headers};
  }

  h1 {
   font-size: 2.6rem;
   line-height: 3.8rem;
   font-weight: 700;
  }
  h2 {
   font-size: 2.2rem;
   line-height: 3.3rem;
   font-weight: 700;
  }
  h3 {
   font-size: 1.6rem;
   line-height: 2.4rem;
   font-weight: 400;
    color: ${({ theme }: any) => theme.username};
  }
  h4 {
   font-size: 1.3rem;
   line-height: 2rem;
  }
`;
