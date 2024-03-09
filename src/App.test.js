import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as auth0Lib from "@auth0/auth0-react";
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

jest.mock("@auth0/auth0-react");
const mockedUseAuth0 = jest.spyOn(auth0Lib, "useAuth0");

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders login button and Dashboard when isAuthenticated is false', async () => {

    mockedUseAuth0.mockReturnValue({
      isAuthenticated: false,
      isLoading: false
    });

    render(<App />);

    const headings = await screen.findAllByRole("heading");

    expect(headings).toHaveLength(2);
    expect(headings[0]).toHaveTextContent("LoginButton Mock");
    expect(headings[1]).toHaveTextContent("Dashboard Mock");
  });

  test('renders logout button and Dashboard when isAuthentication is true', async () => {

    mockedUseAuth0.mockReturnValue({
      isAuthenticated: true,
      isLoading: false
    });

    render(<App />);

    const headings = await screen.findAllByRole("heading");

    expect(headings).toHaveLength(4);
    expect(headings[0]).toHaveTextContent("LogoutButton Mock");
    expect(headings[1]).toHaveTextContent("Profile Information");
    expect(headings[2]).toHaveTextContent("Profile Mock");
    expect(headings[3]).toHaveTextContent("Dashboard Mock");
  });
});
