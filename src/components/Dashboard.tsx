import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListInstances from './ListInstances';
import InstanceDetails from './InstanceDetails';
import CreateInstance from './CreateInstance';

function Dashboard() {
  const [componentToShow, setComponentToShow] = useState("LIST_INSTANCES");
  const [instanceId, setInstanceId] = useState<number>(0);

  function handleClick() {
    setComponentToShow("CREATE_INSTANCE")
  }

  function handleListInstances() {
    setComponentToShow("LIST_INSTANCES")
  }

  function handleClickInstanceDetails(id: number) {
    setComponentToShow("INSTANCE_DETAILS")
    setInstanceId(id)
  }

  return (
    <div className="dashboard">
      <h1>CloudMessage Dashboard</h1>

        <>
          <Link to="/createinstance">Create Instance</Link>
          <ListInstances onClickInstanceDetails={handleClickInstanceDetails} />
        </>

    </div>
  );
}

export default Dashboard;
