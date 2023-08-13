import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="cloudmessage.us.auth0.com"
      clientId="irjJRLxV407Z5xCE35ZxmjaUAshzxKi0"
      authorizationParams={{
        redirect_uri: 'http://localhost:3006',
        audience: "https://cloudmessage.com"
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
