import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import LoginButton from './components/login';
import LogoutButton from './components/logout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="cloudmessage.us.auth0.com"
      clientId="irjJRLxV407Z5xCE35ZxmjaUAshzxKi0"
      authorizationParams={{
        redirect_uri: 'http://localhost:3006'
      }}
    >
      <LoginButton />
      <LogoutButton />
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
