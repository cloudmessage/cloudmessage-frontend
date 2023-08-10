import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ListInstances() {
  // fetch data
  // set it to state
  // display

  interface InstanceObject {
    id: number,
    name: string
  }
  const [instances, setInstances] = useState<Array<InstanceObject>>([])

  useEffect(() => {
    axios.get('http://localhost:3000/instances')
      .then(res => {
        const instData = res.data;
        setInstances(instData);
      })
      .catch(err => { console.log(err); throw err })
  }, []);

  const instList = instances.map((instance) => {
    return <li key={instance.id}>{instance.name}</li>
  })
  return (
    <>
      <h2>Instances</h2>
      <ul>{instList}</ul>
    </>
  )
}

export default ListInstances;
