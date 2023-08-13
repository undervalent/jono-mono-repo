import { createGlobalStyle } from "styled-components";
import { CSSReset } from ".";
import { ThemeProps } from "../types";

type GlobalThemeProps = {
  theme: ThemeProps;
};

export const GlobalStyles = createGlobalStyle`

${CSSReset}

:root {
  --primary-alpha: #7c5dfa;
  --primary-bravo: #9277ff;
  --primary-charlie: #7e88c3;
  --primary-delta: #888eb0;
  --primary-echo: #373b53;

  --secondary-alpha: #f9fafe;
  --secondary-bravo: #dfe3fa;

  --danger-alpha: #ec5757;
  --danger-bravo: #ff9797;

  --dark-alpha: #0c0e16;
  --dark-bravo: #141625;
  --dark-charlie: #1e2139;
  --dark-delta: #252945;
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
    color: ${({ theme }: GlobalThemeProps) => theme.headers};
  }
`;

export const lightTheme = {
  background: "#f8f8fb",
  text: "var(--primary-delta)",
  date: "var(--primary-charlie)",
  headers: "var(--dark-alpha)",
  invoiceItem: "#fff",
  draftText: "var(--primary-echo)",
  draftBg: "rgba(55, 59, 83, 0.06)",
  invoiceTable: "var(--secondary-alpha)",
  invoiceTableTotal: "var(--primary-echo)",
  quantity: "var(--primary-charlie)",
};
export const darkTheme = {
  background: "var(--dark-bravo)",
  text: "#fff",
  date: "var(--secondary-bravo)",
  headers: "#fff",
  invoiceItem: "var(--dark-charlie)",
  draftText: "var(--secondary-bravo)",
  draftBg: "rgba(223, 227, 250, .06)",
  invoiceTable: "var(--dark-delta)",
  invoiceTableTotal: "var(--dark-alpha)",
  quantity: "var(--primary-delta)",
};
