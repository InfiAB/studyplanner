import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PlansContextProvider } from './context/PlansContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PlansContextProvider>
        <App />
      </PlansContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)