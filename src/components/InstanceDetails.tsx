import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { CLOUDMESSAGE_API_URL } from '../constants';

function InstanceDetails() {
  interface InstanceDetailsObject {
    id: number,
    name: string,
    user: string,
    virtual_host: string,
    password: string,
    hostname: string
  }
  const { instanceId } = useParams();
  const [instanceDetails, setInstanceDetails] = useState<Partial<InstanceDetailsObject>>({});

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    async function fetchData() {
      try {
        const token = await getAccessTokenSilently();
        await axios.get(`${CLOUDMESSAGE_API_URL}/instances/${instanceId}`, {
          headers: { 'Authorization': `Bearer ${token}`}
        })
        .then(res => {
          const instData = res.data;
          setInstanceDetails(instData);
        })

      } catch (err) {
        console.error("Error getting instance details:", err)
      }

    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instanceId]);

  return (
    <div>
      <h1>Instance Details</h1>
      <p>Instance Id: {instanceDetails.id}</p>
      <p>Instance Name: {instanceDetails.name}</p>
      <p>User: {instanceDetails.user}</p>
      <p>Virtual Host: {instanceDetails.virtual_host}</p>
      <p>Password: {instanceDetails.password}</p>
      <p>Hostname: {instanceDetails.hostname}</p>
      <p>URL: {`amqp://${instanceDetails.user}:${instanceDetails.password}@${instanceDetails.hostname}/${instanceDetails.virtual_host}`}</p>
    </div>
  );
}

export default InstanceDetails;
