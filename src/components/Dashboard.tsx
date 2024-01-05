import React from 'react';
import { Link } from 'react-router-dom';
import ListInstances from './ListInstances';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>CloudMessage Dashboard</h1>

        <>
          <Link to="/createinstance">Create Instance</Link>
          <ListInstances />
        </>

    </div>
  );
}

export default Dashboard;
