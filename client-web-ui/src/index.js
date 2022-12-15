import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: process.env.REACT_APP_IDP_SERVER_URL,
  client_id: process.env.REACT_APP_IDP_CLIENT_ID,
  client_secret: process.env.REACT_APP_IDP_CLIENT_SECRET,
  redirect_uri: process.env.REACT_APP_IDP_REDIRECT_URI,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);