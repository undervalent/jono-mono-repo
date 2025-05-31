import { createGlobalStyle } from 'styled-components';
import { CSSReset } from '.';

export const GlobalStyles = createGlobalStyle`

${CSSReset}

:root {
  /* Spacing Variables */
  --none: 0;
  --one: 0.1rem;
  --two: 0.2rem;
  --three: 0.3rem;
  --six: 0.6rem;
  --ten: 1rem;
  --size1: 0.4rem;
  --size2: 0.8rem;
  --size3: 1.2rem;
  --size4: 1.6rem;
  --size5: 2rem;
  --size6: 2.4rem;
  --size7: 2.8rem;
  --size8: 3.2rem;
  --size9: 3.6rem;
  --size10: 4rem;
  --size11: 4.4rem;
  --size12: 4.8rem;
  --size13: 5.2rem;
  --size14: 5.6rem;
  --size15: 6rem;
  --size16: 6.4rem;
  --size18: 7.2rem;
  --size20: 8rem;
  --size78: 7.8rem;
  --size88: 8.8rem;
  --size90: 9rem;
  --size100: 10rem;
  --size120: 12rem;
  --size260: 26rem;

  /* Media Queries */
  --xxsm: 320px;
  --xsm: 480px;
  --sm: 768px;
  --mdAlt: 992px;
  --md: 1024px;
  --lg: 1200px;
  --xlg: 1440px;
  --xxlg: 1920px;


  /* Font Weight Variables */
  --regular: 400;
  --demi: 500;
  --bold: 700;

  /* Font Variables */
  --headings: "Quattrocento", serif;
  --fontFamily: "Quattrocento Sans", sans-serif;

  /* Font Size Variables */
  --fontSize1: 1.4rem;
  --fontSize2: 1.6rem;
  --fontSize3: 1.8rem;
  --fontSize4: 2rem;
  --fontSize5: 2.4rem;
  --fontSize6: 2.8rem;
  --fontSize7: 3.4rem;
  --fontSize8: 4rem;
  --fontSize9: 4.8rem;
  --fontSize10: 6rem;
  --fontSize11: 7.2rem;
  --fontSize12: 8.4rem;

  /* Letter Spacing Variables */
  --dense: -0.25rem;
  --tight: -0.15rem;
  --sparse: 0.1rem;
  --double: 0.2rem;

  /* Line Height Variables */
  --lineHeight1: 1.6rem;
  --lineHeight2: 2rem;
  --lineHeight3: 2.4rem;
  --lineHeight4: 2.8rem;
  --lineHeight5: 3.2rem;
  --lineHeight6: 3.6rem;
  --lineHeight7: 4.4rem;
  --lineHeight8: 5.2rem;
  --lineHeight9: 6rem;
  --lineHeight10: 7.6rem;
  --lineHeight11: 9.2rem;
  --lineHeight12: 10.8rem;
  --lineHeightMultiplierSmall: 1.3;
  --lineHeightMultiplierMedium: 1.5;
  --lineHeightMultiplierLarge: 2;

  /* Curve Variables */
  --linear: cubic-bezier(0, 0, 1, 1);
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --easeSlow: cubic-bezier(0.35, 0, 0.5, 1);
  --easeQuick: cubic-bezier(0.35, 0, 0.25, 1);
  --easeCalm: cubic-bezier(0.12, 0, 0.39, 0);
  --easeEntrance: cubic-bezier(0, 0, 0.1, 1);
  --easeExit: cubic-bezier(0.35, 0, 0.8, 1);
  --easeSpirited: cubic-bezier(0.35, 1.3, 0.3, 1);
  --easeEntranceSpirited: cubic-bezier(0.15, 1.3, 0.3, 1);
  --easeExitSpirited: cubic-bezier(0.7, -0.1, 0.6, 0.1);
  --easeInSine: cubic-bezier(0.12, 0, 0.39, 0);
  --easeOutSine: cubic-bezier(0.61, 1, 0.88, 1) 500ms;

  /* Elevation Variables */
  --noneElevation: 0 0 0 0 rgba(0, 0, 0, 0.1);
  --skim: 0 1rem 1rem -1rem rgba(72, 84, 159, .25);
  --lifted: 0 1em 2rem 0 rgba(72, 84, 159, .25);
  --raised: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.2);
  --floating: 0 0.6rem 2.4rem rgba(0, 0, 0, 0.25);
  /* Opacity Variables */
  --noneOpacity: 0;
  --opacity10: 0.1;
  --opacity13: 0.13;
  --opacity20: 0.2;
  --opacity25: 0.25;
  --opacity30: 0.3;
  --opacity33: 0.33;
  --opacity40: 0.4;
  --opacity50: 0.5;
  --opacity60: 0.6;
  --opacity70: 0.7;
  --opacity80: 0.8;
  --opacity90: 0.9;
  --opacity100: 1;
  --opacityDisabled: 0.5;
  --opacity03: 0.03;
  --opacity07: 0.07;
  --opacityShadow: 0.2;

  /* Radius Variables */
  --defaultRadius: 0.4rem;
  --noneRadius: 0;
  --xSmall: 0.2rem;
  --small: 0.4rem;
  --medium: 0.6rem;
  --large: 0.8rem;
  --xLarge: 1.2rem;
  --circle: 50%;
  --pill: 9999rem;

  /* Duration Variables */
  --paused: paused;
  --slow: 3s;
  --fast: 500ms;
  --zero: 0s;
  --time1: 0.05s;
  --time2: 0.1s;
  --time3: 0.15s;
  --time4: 0.25s;
  --time5: 0.35s;
  --time6: 0.5s;
  --time7: 0.75s;
  --time8: 1s;
  --time9: 1.5s;
  --time10: 2s;
  --time11: 3s;
  --time12: 4s;

  --radix-navigation-menu-viewport-height: 300px;
  --radix-navigation-menu-viewport-width: 400px;


  /* Color Variables */
  --dark1: #0C0E16;
--dark2: #141625;
--dark3: #1E2139;
--dark4: #252945;
--dark5: #373B53;
--white: #fff;
--purple1: #7C5DFA;
--purple2: #9277FF;
--purple3: #7E88C3;
--purple4: #888EB0;
--purple5: #dfe3fa;
--purple6: #f9fafe;
--red1: #ec5757;
--red2: rgba(255,151,151);

  --background: #f2f2f2;
  --headers: var(--dark1);
  --primaryBodyText: var(--purple4);

  --uiElementBackground: var(--white);
  --uiElementBackgroundSecondary: #fff;
  --uiElementHoverBackground: var(--white);
  --uiElementText: var(--dark1);
  --uiElementActiveText: var(--purple1);
  --uiElementBorder: var(--purple5);
  --uiElementBorderHover: var(--purple2);

  --tableBackground: var(--purple6);
  --tableFooterBackground: var(--dark5);

  /* buttons  */
  --primaryBackground: var(--purple1);
  --primaryBackgroundHover: var(--purple2);
  --primaryText: var(--white);
  --primaryBorder:var(--purple1);

  --secondaryBackground: var(--dark5);
  --secondaryBackgroundHover: var(--dark1);
  --secondaryText: var(--purple4);
  --secondaryBorder: transparent;

  --tertiaryBackground: var(--purple6);
  --tertiaryBackgroundHover: var(--purple5);
  --tertiaryText: var(--purple3);
  --tertiaryBorder: transparent;

  --dangerBackground: var(--red1);
  --dangerBackgroundHover: var(--red2);
  --dangerText: var(--white);
  --dangerBorder: transparent;

  --subtleBackground: var(--purple6);
  --subtleBackgroundHover: var(--purple5);
  --subtleText: var(--purple3);

--successText: #33d69f;
--successBackground: rgba(51, 214, 159, 0.06);

--warningText: #ff8f00;
--warningBackground: rgba(255, 143, 0, 0.06);

/* Dark Mode Styles */
.dark {
  --background: var(--dark2);
  --primaryBodyText: var(--white);
  --headers: var(--white);

  --uiElementBackground: var(--dark3);
  --uiElementHoverBackground: var(--dark3);
  --uiElementText: var(--white);
  --uiElementActiveText: var(--purple2);
  --uiElementBorder: var(--dark4);
  --uiElementBorderHover: var(--dark4);
  --uiElementBackgroundSecondary: var(--dark2);

  --tableBackground: var(--dark4);
  --tableFooterBackground: var(--dark1);

//BUTTONS
  --secondaryText: var(--purple5);

  --tertiaryBackground: var(--purple5);
  --tertiaryBackgroundHover: var(--white);
  --tertiaryText: var(--purple5);
  --tertiaryBorder: transparent;
 }


  body {
    background: var(--background);
    color: var(--primaryBodyText);
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  h1,
  h2,
  h3,
  h4 {
    color: var(--headers);
  }


 .delete {
  --primary-alpha: #7c5dfa;
  --primary-bravo: #9277ff;
  --primary-charlie: #7e88c3;
  --primary-delta: #888eb0;
  --primary-echo: #373b53;
  --primary-foxtrot: #9699aa;

  --secondary-alpha: #f9fafe;
  --secondary-bravo: #dfe3fa;

  --danger-alpha: #ec5757;
  --danger-bravo: #ff9797;

  --dark-alpha: #0c0e16;
  --dark-bravo: #141625;
  --dark-charlie: #1e2139;
  --dark-delta: #252945;
}
`;

export const lightTheme = {
  background: '#f8f8fb',
  text: 'var(--primary-delta)',
  date: 'var(--primary-charlie)',
  headers: 'var(--dark-alpha)',
  invoiceItem: '#fff',
  draftText: 'var(--primary-echo)',
  draftBg: 'rgba(55, 59, 83, 0.06)',
  invoiceTable: 'var(--secondary-alpha)',
  invoiceTableTotal: 'var(--primary-echo)',
  quantity: 'var(--primary-charlie)',
};
export const darkTheme = {
  background: 'var(--dark-bravo)',
  text: '#fff',
  date: 'var(--secondary-bravo)',
  headers: '#fff',
  invoiceItem: 'var(--dark-charlie)',
  draftText: 'var(--secondary-bravo)',
  draftBg: 'rgba(223, 227, 250, .06)',
  invoiceTable: 'var(--dark-delta)',
  invoiceTableTotal: 'var(--dark-alpha)',
  quantity: 'var(--primary-delta)',
};

// @media (min-width: 450px) {
//   /* small and up */
// }
//
// @media (min-width: 768px) {
//   /* medium and up */
// }
//
// @media (min-width: 1170px) {
//   /* large and up */
// }
//
// @media (min-width: 1440px) {
//   /* huge and up */
// }
// /* Small only (450px - 767px) */
// @media (min-width: 450px) and (max-width: 767px) {
//   /* small only */
// }
//
// /* Medium only (768px - 1169px) */
// @media (min-width: 768px) and (max-width: 1169px) {
//   /* medium only */
// }
//
// /* Large only (1170px - 1439px) */
// @media (min-width: 1170px) and (max-width: 1439px) {
//   /* large only */
// }
//
// /* Huge only (1440px and up) */
// @media (min-width: 1440px) {
//   /* huge only */
// }
//
//
// /* Small and down (up to 449px) */
// @media (max-width: 449px) {
//   /* small and down */
// }
//
// /* Medium and down (up to 767px) */
// @media (max-width: 767px) {
//   /* medium and down */
// }
//
// /* Large and down (up to 1169px) */
// @media (max-width: 1169px) {
//   /* large and down */
// }
//
// /* Huge and down (up to 1439px) */
// @media (max-width: 1439px) {
//   /* huge and down */
// }
