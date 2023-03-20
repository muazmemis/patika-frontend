import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

describe("Copy Emoji", () => {
  let copyEmoji;

  beforeEach(() => {
    render(<App />);
    copyEmoji = screen.getByText("Yum");
  });

  test("copy to clickboard test", () => {
    userEvent.click(copyEmoji);
    expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
      "😋"
    );
  });
});
