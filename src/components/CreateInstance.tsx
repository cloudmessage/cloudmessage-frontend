import React from 'react';

function CreateInstance({ onClickListInstances}: any) {

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("form submitted");
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
