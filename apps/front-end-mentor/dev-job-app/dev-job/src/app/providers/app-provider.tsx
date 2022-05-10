import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../lib/styles";
import { useAppSelector } from "../state/hooks";

interface ProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme.theme);
  const isDarkTheme = theme === "dark";

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
