import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalCartProvider } from './context/GlobalCartContext';
import { AuthContext } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContext>
     <GlobalCartProvider>
        <App />
      </GlobalCartProvider>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);


