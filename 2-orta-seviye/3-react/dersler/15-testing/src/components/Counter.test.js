/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Tests", () => {
  let count, increaseBtn, decreaseBtn;
  const setup = () => render(<Counter />);

  beforeEach(() => {
    console.log("Her testten önce çalışacağım");
    setup();
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
  });

  beforeAll(() => {
    console.log("İlk başta bir kere çalışacağım");
  });

  afterAll(() => {
    console.log("En son bir kere çalışacağım");
  });

  afterEach(() => {
    console.log("Her testten sonra çalışacağım");
  });

  it("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  it("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
