import { render, screen } from '@testing-library/react';
import ListInstances from './ListInstances';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios', () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          {
            id: 10,
            name: "item10"
          },
          {
            id: 20,
            name: "item20"
          }
        ]
      });
    }
  }
});

test('renders the ListInstances component', async () => {

  await render(<ListInstances />)

  expect(await screen.findByRole("heading")).toHaveTextContent("Instances");
  // expect(await screen.findAllByRole("list")).toHaveLength(1);

});
