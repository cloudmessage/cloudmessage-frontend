import React from 'react';

function InstanceDetails({ onClickListInstances}: any) {

  return (
    <div>
      <h1>Instance Details</h1>
      <button onClick={onClickListInstances}>List Instances</button>
    </div>
  );
}

export default InstanceDetails;
