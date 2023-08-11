"use client"
import React from "react";
import { ThemeProvider } from "styled-components";
import { tokens } from "./design-tokens";

interface ProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {

  return (
    <ThemeProvider theme={tokens}>
      {children}
    </ThemeProvider>
  );
};
