import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import './index.css'
import App from './app/app';

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [],
  },
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <RecoilRoot>
       <RouterProvider router={router} />
      </RecoilRoot>
  </StrictMode>
);
