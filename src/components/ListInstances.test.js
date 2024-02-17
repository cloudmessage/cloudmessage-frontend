import { render, screen } from '@testing-library/react';
import ListInstances from './ListInstances';
import '@testing-library/jest-dom/extend-expect';

test('renders the ListInstances component', () => {
  render(
      <ListInstances />
  );

  expect(screen.getByRole("heading")).toHaveTextContent("Instances");
});
