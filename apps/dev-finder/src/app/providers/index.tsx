import React from 'react';

import { Provider } from 'react-redux';
import { store } from '../state/store';
import { ThemeProvider } from './theme-provider';
interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
