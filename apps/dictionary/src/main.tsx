import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AppProvider } from './app/providers';
import { Provider } from "react-redux";
import { store } from "./app/state/store";
import {App} from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
     <AppProvider>
       <App />
      </AppProvider>
    </Provider>
  </StrictMode>
);
