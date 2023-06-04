import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pomodoro from "./Pomodoro";

test("renders initial timer value", () => {
  render(<Pomodoro />);
  const timerElement = screen.getByText(/15:00/i);
  expect(timerElement).toBeInTheDocument();
});

test("starts the timer when start button is clicked", () => {
  render(<Pomodoro />);
  const startButton = screen.getByText(/Start/i);
  fireEvent.click(startButton);
  setTimeout(() => {
    const timerElement = screen.getByText(/14:59/i);
    expect(timerElement).toBeInTheDocument();
  }, 1000);
});
