import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

describe("Search Emoji", () => {
  let searchEmoji;
  const value = "Grinning";

  beforeEach(() => {
    render(<App />);
    searchEmoji = screen.getByTitle("inputTest");
  });

  test("render after filter", () => {
    userEvent.type(searchEmoji, value);
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
