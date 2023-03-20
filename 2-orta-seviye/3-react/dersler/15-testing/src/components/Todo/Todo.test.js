/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from ".";

describe("Todo Tests", () => {
  let button, input;
  const setup = () => render(<Todo />);

  beforeEach(() => {
    setup();

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Varsayılan olarak veerilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });

  test("Input ve button dokümanda bulunmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Inputa text girildiğinde listeye eklenmeli", () => {
    const name = "Muaz";
    userEvent.type(input, name);

    userEvent.click(button);

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
