import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './app/app';
import { ErrorBoundary } from '@jono/shared-components';
import { Provider } from 'react-redux';
import { store } from './app/lib/state/store';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    children: [],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
);
