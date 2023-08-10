import React from 'react';
import { useState } from 'react';

function CreateInstance({ onClickListInstances}: any) {
  const [instName, setInstName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e.currentTarget.name.valueOf)
    setInstName(e.currentTarget.name.valueOf)
  }

  return (
    <>
      <h1>Create Instance</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Instance Name</p>
          <input name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>

      <button
        style={{marginTop: "100px"}}
        onClick={onClickListInstances}
      >
        List Instances
      </button>

    </>
  );
}

export default CreateInstance;
