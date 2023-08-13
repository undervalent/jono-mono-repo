import './index.css';

import { ThemeProvider } from "styled-components";
import { useRecoilValue } from "recoil";
import { themeState, selectedInvoiceState, showFormState } from "./state";
import { InvoiceList, Invoice, InvoiceForm } from "./views";
import { GlobalStyles, lightTheme, darkTheme } from "./lib/styles/globals";
import { NavBar } from "./components/navbar";
import { Wrapper, ContentWrapper } from "./app.styles";

function App() {
  const theme = useRecoilValue(themeState);
  const selected = useRecoilValue(selectedInvoiceState);
  const showForm = useRecoilValue(showFormState);
  const isDarkTheme = theme === "dark";

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <NavBar />
        <ContentWrapper>
          {selected && <Invoice />}
          {!selected && <InvoiceList />}
          {showForm && <InvoiceForm />}
        </ContentWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
