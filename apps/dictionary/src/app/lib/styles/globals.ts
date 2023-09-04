import { createGlobalStyle } from "styled-components";
import { CSSReset } from "./reset";
import { ThemeProps } from "../types";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const GlobalStyles = createGlobalStyle`

${CSSReset}

:root {
--black: ${({theme})=> theme.colors.black};
--white: ${({ theme }) => theme.colors.white};
--darkText: ${({ theme })=> theme.colors.black3 };
--lightText: ${({ theme }) => theme.colors.white };
--elementBgDark: ${({ theme }) => theme.colors.black2};
--elementBgLight: ${({ theme }) => theme.colors.white2};
--switchBgDark: ${({ theme }) => theme.colors.accent};
--switchBgLight: ${({ theme }) => theme.colors.lightGray};
}
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-size: ${({ theme }) => theme.fontSize.fontSize2};
    line-height: ${({ theme }) => theme.lineHeight.lineHeight2};
    font-family: ${({theme})=> theme.fontFamily};
  }

h1,
h2,
h3,
h4 {
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }: GlobalThemeProps) => theme.headers};
}

h1 {
  font-size: ${({ theme }) => theme.fontSize.fontSize5};
  line-height: ${({ theme }) => theme.lineHeight.lineHeight5};
}
h2 {
  font-size: ${({ theme }) => theme.fontSize.fontSize4};
  line-height: ${({ theme }) => theme.lineHeight.lineHeight4};
}
h3 {
  font-size: ${({ theme }) => theme.fontSize.fontSize3};
  line-height: ${({ theme }) => theme.lineHeight.lineHeight2};
}
h4 {
  font-size: ${({ theme }) => theme.fontSize.fontSize1};
  line-height: ${({ theme }) => theme.lineHeight.lineHeight1};
}

.visually-hidden {
  /* Contain text within 1px box */
  height: 1px;
  overflow: hidden;
  width: 1px;
  /* Keep the layout */
  position: absolute;
  /* Remove any visible trace (e.g. background color) */
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%); /* browsers in the future */
  /* Prevent the screen reader to skip spaces between words */
  white-space: nowrap;
}

`;

export const lightTheme = {
  background: "var(--white)",
  headers: "var(--dark-text)",
  text: "var(--dark-text)",
  elementBackground: "var(--elementBgLight)",
  switchBg: "var(--switchBgLight)",
  elementShadow: 'rgba(0, 0, 0, 0.10)',
};
export const darkTheme = {
  background: "var(--black)",
  headers: "var(--white)",
  text: "var(--white)",
  elementBackground: "var(--elementBgDark)",
  switchBg: "var(--switchBgDark)",
  elementShadow: '#A445ED',
};
