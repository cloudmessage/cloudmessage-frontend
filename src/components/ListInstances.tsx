import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { CLOUDMESSAGE_API_URL } from '../constants';

function ListInstances({ onClickInstanceDetails}: any) {

  const { getAccessTokenSilently } = useAuth0();

  interface InstanceObject {
    id: number,
    name: string
  }
  const [instances, setInstances] = useState<Array<InstanceObject>>([])

  useEffect(() => {
    async function fetchData() {
      const token = await getAccessTokenSilently();
      axios.get(`${CLOUDMESSAGE_API_URL}/instances`, {
        headers: { 'Authorization': `Bearer ${token}`}
        })
        .then(res => {
            const instData = res.data;
            setInstances(instData);
        })
        .catch(err => { console.log(err); throw err })
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const instList = instances.map((instance) => {
    return <li key={instance.id}><button onClick={() => onClickInstanceDetails(instance.id)}>{instance.name}</button></li>
  })
  return (
    <>
      <h2>Instances</h2>
      <ul>{instList}</ul>
    </>
  )
}

export default ListInstances;
