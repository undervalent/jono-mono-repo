// @ts-nocheck

import { createGlobalStyle } from 'styled-components';
import { CSSReset } from './reset';
import { ThemeProps } from '../types';

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

  --logo-border-radius: ${({ theme }) => theme.radius.xLarge};
  --border-radius: ${({ theme }) => theme.radius.medium};
}
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-size: ${({ theme }) => theme.fontSize.fontSize2};
    line-height: ${({ theme }) => theme.lineHeight.lineHeight3};
  }

h1,
h2,
h3,
h4 {
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.headers};
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
  background: 'var(--light-bravo)',
  headers: 'var(--dark-alpha)',
  text: 'var(--grey-bravo)',
  elementBackground: 'var(--light-alpha)',
  secondaryBtnBackground: '#EEEFFD',
  secondaryBtnBackgroundHover: '#C5C9F5',
  secondaryBtnText: ' #5964E0',
  checkBoxBG: '#E7E8E9',
  checkBoxSelectedBG: 'var(--primary-alpha)',
};
export const darkTheme = {
  background: 'var(--dark-bravo)',
  headers: 'var(--light-alpha)',
  text: 'var(--grey-alpha)',
  elementBackground: 'var(--dark-alpha)',
  secondaryBtnBackground: '#303642',
  secondaryBtnBackgroundHover: '#696E76',
  secondaryBtnText: '#fff',
  checkBoxBG: '#313743',
  checkBoxSelectedBG: 'var(--primary-alpha)',
};
