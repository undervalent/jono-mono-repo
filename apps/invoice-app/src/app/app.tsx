import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import { getTheme } from './state/ui';
import { getSelectedInvoice } from './state/invoice';
import { SlideOut } from './components/slideout/slideout';
import { ThemeProvider } from 'styled-components';
import { InvoiceList, Invoice } from './views';
import { GlobalStyles, lightTheme, darkTheme } from './lib/styles/globals';
import { NavBar } from './components/navbar';
import { Wrapper, ContentWrapper } from './app.styles';

function App() {
  const theme = useSelector(getTheme);
  const selected = useSelector(getSelectedInvoice);
  const isDarkTheme = theme === 'dark';

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <NavBar />
        <ContentWrapper>
          {selected ? <Invoice /> : <InvoiceList />}
          <SlideOut />
        </ContentWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
