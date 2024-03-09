import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock("./components/login", () => {
  return {
    __esModule: true,
    default: function () {
      return <h1>LoginButton Mock</h1>
    }
  };
});

jest.mock("./components/profile", () => {
  return {
    __esModule: true,
    default: function () {
      return <h1>Profile Mock</h1>
    }
  };
});

jest.mock("./components/CreateInstance", () => {
  return {
    __esModule: true,
    default: function () {
      return <h1>CreateInstance Mock</h1>
    }
  };
});

jest.mock("./components/Dashboard", () => {
  return {
    __esModule: true,
    default: function () {
      return <h1>Dashboard Mock</h1>
    }
  };
});

jest.mock("./components/InstanceDetails", () => {
  return {
    __esModule: true,
    default: function () {
      return <h1>InstanceDetails Mock</h1>
    }
  };
});

jest.mock("./components/PageNotFound", () => {
  return {
    __esModule: true,
    default: function () {
      return <h1>PageNotFound Mock</h1>
    }
  };
});

jest.mock("./components/logout", () => {
  return {
    __esModule: true,
    default: function () {
      return <h1>LogoutButton Mock</h1>
    }
  };
});

jest.mock("@auth0/auth0-react", () => {
  return {
    __esModule: true,
    useAuth0: function() {
      return {
        isAuthenticated: false,
        isLoading: false
      }
    }
  };
});

test('renders the main page', async () => {
  render(<App />);

  const headings = await screen.findAllByRole("heading");

  expect(headings).toHaveLength(2);
  expect(headings[0]).toHaveTextContent("LoginButton Mock");
  expect(headings[1]).toHaveTextContent("Dashboard Mock");
});
