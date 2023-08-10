import React from 'react';
import { useState } from 'react';
import ListInstances from './ListInstances';
import InstanceDetails from './InstanceDetails';
import CreateInstance from './CreateInstance';

function Dashboard() {
  const [componentToShow, setComponentToShow] = useState("LIST_INSTANCES");

  function handleClick() {
    setComponentToShow("CREATE_INSTANCE")
  }

  function handleListInstances() {
    setComponentToShow("LIST_INSTANCES")
  }

  function handleClickInstanceDetails() {
    setComponentToShow("INSTANCE_DETAILS")
  }

  return (
    <div className="dashboard">
      <h1>CloudMessage Dashboard</h1>

      {componentToShow === "LIST_INSTANCES" &&
        <>
          <button onClick={handleClick}>Create Instance</button>
          <ListInstances onClickInstanceDetails={handleClickInstanceDetails} />
        </>
      }

      {componentToShow === "INSTANCE_DETAILS" && <InstanceDetails onClickListInstances={handleListInstances} />}

      {componentToShow === "CREATE_INSTANCE" && <CreateInstance onClickListInstances={handleListInstances} />}
    </div>
  );
}

export default Dashboard;
