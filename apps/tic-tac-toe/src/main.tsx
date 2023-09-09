import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles/global.css'
import App from './app/app';
import { Provider } from 'react-redux'
import { store } from './state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
