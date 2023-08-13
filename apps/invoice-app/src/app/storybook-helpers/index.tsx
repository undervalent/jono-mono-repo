import "../index.css";
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../lib/styles/globals";

import { themeState } from "../state";

const RecoilWrapper: React.FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
interface Props {
  theme?: "light" | "dark";
}
const ThemeWrapper: React.FC<Props> = ({ children, theme }) => {
  const [recoilTheme, setTheme] = useRecoilState(themeState);
  const isDarkTheme = recoilTheme === "dark";

  React.useEffect(() => {
    return () => {
      if (theme) {
        setTheme(theme);
      }
    };
  }, [theme, setTheme]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
export const StoryWrapper: React.FC<Props> = ({ children, theme }) => {
  return (
    <RecoilWrapper>
      <ThemeWrapper theme={theme}>{children}</ThemeWrapper>
    </RecoilWrapper>
  );
};
