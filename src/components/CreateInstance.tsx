import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function CreateInstance({ onClickListInstances}: any) {
  const [instName, setInstName] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/instances', {
        name: instName
      })
      alert("instance created");
      // TODO: navigate to list instances
    } catch(err) {
      console.error("Error on form submit: ", err)
      throw err
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInstName(e.target.value)
  }

  return (
    <>
      <h1>Create Instance</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Instance Name</p>
          <input
            name="name"
            value={instName}
            onChange={handleChange}
          />
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
