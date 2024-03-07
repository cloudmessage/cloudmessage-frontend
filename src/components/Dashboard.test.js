import { render, screen, within } from "@testing-library/react";
import { Link, MemoryRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import '@testing-library/jest-dom';

jest.mock("./ListInstances", () => {
  return {
    __esModule: true,
    default: function () {
      return <><h2>ListInstances Mock Component</h2></>
    }
  };
});

describe("Dashboard", () => {
  test("renders link and list instances", async () => {
    render(<Router><Dashboard /></Router>);

    const headings = await screen.findAllByRole("heading")
    expect(headings).toHaveLength(2);
    expect(headings[0]).toHaveTextContent("CloudMessage Dashboard");
    expect(headings[1]).toHaveTextContent("ListInstances Mock Component");
  });
});
