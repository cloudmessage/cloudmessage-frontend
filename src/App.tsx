import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import Profile from './components/profile';
import CreateInstance from './components/CreateInstance';
import ListInstances from './components/ListInstances';
import InstanceDetails from './components/InstanceDetails';
import PageNotFound from './components/PageNotFound';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Router>
      <div className="App">
        { !isAuthenticated
          ? <LoginButton />
          : <>
              <LogoutButton />
              <hr />
              <h3>Profile Information</h3>
              <Profile></Profile>
              <hr />
            </>
        }
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/createinstance" element={<CreateInstance />}/>
        <Route path="/instancedetails/:instanceId" element={<InstanceDetails />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App;
