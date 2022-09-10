import { createGlobalStyle } from "styled-components";
import { CSSReset } from "./reset";
import { ThemeProps } from "@devjobs/types";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const GlobalStyles = createGlobalStyle`

${CSSReset}

:root {
  --primary-alpha: #5964e0;
  --primary-bravo: #939bf4;

  --light-alpha: #fff;
  --light-bravo: #f4f6f8;

  --grey-alpha: #9daec2;
  --grey-bravo: #6e8098;

  --dark-alpha: #19202d;
  --dark-bravo: #121721;

  --logo-border-radius: 1.5rem;
  --border-radius: .6rem;
  --background: red;
  --input-light: rgba(255,255,255,.5)
  --input-dark: rgba(25, 32, 45, .5)
}
  body {
    background: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

h1,
h2,
h3,
h4 {
  font-weight: 700;
  color: ${({ theme }: GlobalThemeProps) => theme.headers};
}
h1,
h2,
h3,
h4 {
  font-weight: 700;
  color: ${({ theme }: GlobalThemeProps) => theme.headers};
}

h1 {
  font-size: 2.8rem;
  line-height: 3.4rem;
}
h2 {
  font-size: 2.4rem;
  line-height: 2.9rem;
}
h3 {
  font-size: 2rem;
  line-height: 2.4rem;
}
h4 {
  font-size: 1.4rem;
  line-height: 1.8rem;
}

`;

export const lightTheme = {
  background: "var(--light-bravo)",
  headers: "var(--dark-alpha)",
  text: "var(--grey-bravo)",
  elementBackground: "var(--light-alpha)",
  secondaryBtnBackground: "#EEEFFD",
  secondaryBtnBackgroundHover: "#C5C9F5",
  secondaryBtnText: " #5964E0",
  checkBoxBG: "#E7E8E9",
  checkBoxSelectedBG: "var(--primary-alpha)",
  input: "var(--input-light)",
};
export const darkTheme = {
  background: "var(--dark-bravo)",
  headers: "var(--light-alpha)",
  text: "var(--grey-alpha)",
  elementBackground: "var(--dark-alpha)",
  secondaryBtnBackground: "#303642",
  secondaryBtnBackgroundHover: "#696E76",
  secondaryBtnText: "#fff",
  checkBoxBG: "#313743",
  checkBoxSelectedBG: "var(--primary-alpha)",
  input: "var(--input-dark)",
};
