import './styles.css';
import styled from 'styled-components';

import { Header, Form, DefinitionContent } from './components';

const Container = styled.section`
margin: auto;
max-width: 73.6rem;
`

export function App() {

  return (
    <main>
      <Container>
        <Header />
        <Form />
        <DefinitionContent />
      </Container>
      </main>
  );
}


