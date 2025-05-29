import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globals';
import { useSelector } from 'react-redux';
import { getTheme } from '../state/ui';
interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const theme = useSelector(getTheme);
  const isDarkTheme = theme === 'dark';

  return (
    <StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
}
