import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import InstanceDetails from './InstanceDetails';
import '@testing-library/jest-dom';
import axios from 'axios';

jest.mock('axios');

describe('InstanceDetails', () => {

  let instDetails = {
    id: "10",
    name: "instance-name",
    user: "a-user",
    virtual_host: "inst-virtual-host",
    password: "my-password",
    hostname: "inst-hostname"
  };

  test('renders the ListInstances component', async () => {

    axios.get.mockImplementationOnce(() => Promise.resolve(
      {data: instDetails}
    ));

    render(<Router><InstanceDetails /></Router>);

    expect(await screen.findByRole("heading")).toHaveTextContent("Instance Details");
    expect(await screen.findByText(/Instance Id:/)).toHaveTextContent(`Instance Id: ${instDetails.id}`);

    expect(screen.getByText(/Instance Name:/)).toHaveTextContent(`Instance Name: ${instDetails.name}`);
    expect(screen.getByText(/User:/)).toHaveTextContent(`User: ${instDetails.user}`);
    expect(screen.getByText(/Virtual Host:/)).toHaveTextContent(`Virtual Host: ${instDetails.virtual_host}`);
    expect(screen.getByText(/Password:/)).toHaveTextContent(`Password: ${instDetails.password}`);
    expect(screen.getByText(/Hostname:/)).toHaveTextContent(`Hostname: ${instDetails.hostname}`);

    const expectedURL = "amqp://a-user:my-password@inst-hostname/inst-virtual-host";
    expect(screen.getByText(/URL:/)).toHaveTextContent(`URL: ${expectedURL}`);
  });

});
