import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import emojiList from "../emojiList.json";

describe("emoji-list-render", () => {
  const firstEmojiList = emojiList.slice(0, 20);

  beforeEach(() => {
    render(<App />);
  });

  test("Emoji list render", () => {
    firstEmojiList.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
