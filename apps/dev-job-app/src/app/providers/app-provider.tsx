import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../lib/styles";
import { useAppSelector } from "../state/hooks";
import { getTheme } from "../state/features/ui";
import { tokens } from "./design-tokens";

interface ProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const theme = useAppSelector(getTheme);
  const isDarkTheme = theme === "dark";
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  const defaultTheme = { ...currentTheme, ...tokens } as const;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
