import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './App.css';
import Dashboard from './components/Dashboard';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="App">
      { !isAuthenticated
        ? <LoginButton />
        : <>
            <LogoutButton />
            <hr />
            <h3>Profile Information</h3>
            <Profile></Profile>
            <hr />
            <Dashboard/>
          </>
      }
    </div>
  )
}

export default App;
