import { render, screen } from '@testing-library/react';
import ListInstances from './ListInstances';

test('renders the ListInstances component', () => {
  render(
      <ListInstances />
  );

  expect(screen.getAllByRole("button", {hidden: true})).toHaveTextContent(/CloudMessage Dashboard/);
});
