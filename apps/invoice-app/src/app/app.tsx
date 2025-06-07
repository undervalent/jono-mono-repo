import React from 'react';
import './index.css';
import { useSelector } from 'react-redux';
import { getTheme } from './state/ui';
import { getSelectedInvoice } from './state/invoice';
import { SlideOut } from './components/slideout/slideout';
import { InvoiceList, Invoice } from './views';
import { NavBar } from './components/navbar';
import { Wrapper, ContentWrapper } from './app.styles';

function App() {
  const theme = useSelector(getTheme);
  const selected = useSelector(getSelectedInvoice);

  React.useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <Wrapper>
      <NavBar />
      <ContentWrapper>
        {selected ? <Invoice /> : <InvoiceList />}
        <SlideOut />
      </ContentWrapper>
    </Wrapper>
  );
}

export default App;
