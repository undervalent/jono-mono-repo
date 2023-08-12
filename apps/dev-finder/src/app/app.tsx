
import * as Styled from './app.styles';
import { Providers } from './providers';
import { Header } from './components/header';
import { Search } from './components/search/search-component';
import { DeveloperView } from './components/developer-view';

function App() {

  return (
    <Providers>
      <Styled.Wrapper>
        <Header />
        <Search />
        <DeveloperView />
    </Styled.Wrapper>
      </Providers>
  );
}

export default App
