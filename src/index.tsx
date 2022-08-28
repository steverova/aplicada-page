import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom/client';
import Redirect from './Redirect';
import { UserProvider } from './contexts/UserContext';
import Footer from "./view/page/CustomFooter";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserProvider>
    <React.StrictMode>
      <Redirect />
      <Footer></Footer>
    </React.StrictMode>
  </UserProvider>
);

