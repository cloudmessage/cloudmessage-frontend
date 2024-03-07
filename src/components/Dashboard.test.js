import { render, screen, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import '@testing-library/jest-dom';
import { createMemoryHistory } from "history";
import Dashboard from "./Dashboard";

jest.mock("./ListInstances", () => {
  return {
    __esModule: true,
    default: function () {
      return <><h2>ListInstances Mock Component</h2></>
    }
  };
});

describe("Dashboard", () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  test("renders link and list instances", async () => {
    render(<Router location={history.location} navigator={history}><Dashboard /></Router>);

    const headings = await screen.findAllByRole("heading")
    expect(headings).toHaveLength(2);
    expect(headings[0]).toHaveTextContent("CloudMessage Dashboard");
    expect(headings[1]).toHaveTextContent("ListInstances Mock Component");

    expect(screen.getByRole("link")).toHaveAttribute("href", "/createinstance");
  });

  test("clicking link navigates to create instance", async () => {
    render(<Router location={history.location} navigator={history}><Dashboard /></Router>);

    const linkElem = await screen.findByRole("link");
    fireEvent.click(linkElem);

    expect(history.location.pathname).toBe("/createinstance");
  });
});
