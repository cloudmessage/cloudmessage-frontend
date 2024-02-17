import React from 'react';

const Auth0Provider = ({ children }) => {
  return <div>{children}</div>
}

const useAuth0 = () => {
  return {
    getAccessTokenSilently: () => true
  }
}
export { Auth0Provider, useAuth0 };
