import React from 'react';

function CreateInstance({ onClickListInstances}: any) {
  return (
    <>
      <h1>Create Instance</h1>
      <button onClick={onClickListInstances}>List Instances</button>
    </>
  );
}

export default CreateInstance;
