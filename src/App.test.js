import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders the main page', () => {
  render(<App />);

  expect(screen.getAllByRole("button", {hidden: true})).toHaveTextContent(/CloudMessage Dashboard/);
});
