import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ListInstances from './ListInstances';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

jest.mock('axios');

describe('ListInstances', () => {

  let instances = [{ id: 10, name: 'inst10'}, {id:20, name: 'inst20'}];

  test('renders the ListInstances component', async () => {

    axios.get.mockImplementationOnce(() => Promise.resolve(
      {data: instances}
    ));

    render(<Router><ListInstances /></Router>);

    expect(await screen.findByRole("heading")).toHaveTextContent("Instances");
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).toHaveLength(2);

  });

});
