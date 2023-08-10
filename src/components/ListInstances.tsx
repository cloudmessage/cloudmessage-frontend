import React from 'react';
import { useState, useEffect } from 'react';

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
    setInstances([
      {
        id: 1,
        name: 'inst-1'
      },
      {
        id: 2,
        name: 'inst-2'
      }
    ])
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
