
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState } from "../state";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/globals";

interface Props {
  children: React.ReactNode
}

export function ThemeProvider({children}:Props) {

   const theme = useRecoilValue(themeState);
   const isDarkTheme = theme === "dark";

   return (<StyledThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
     {children}
      </StyledThemeProvider>
  );
}
