import { render, screen, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import '@testing-library/jest-dom';
import { createMemoryHistory } from "history";
import CreateInstance from "./CreateInstance";

describe("CreateInstance", () => {

  let history;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  test("renders component", async () => {

    render(<Router location={history.location} navigator={history}><CreateInstance /></Router>);

    expect(await screen.findByRole("heading")).toHaveTextContent("Create Instance");
    expect(screen.getByRole("textbox")).toHaveAccessibleName("Instance Name");
    expect(screen.getByRole("button")).toHaveAccessibleName("Submit");
  });
});
