import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { InputDefault } from ".";

const renderComponent = () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <InputDefault name={"test"} placeholder={"test"} register={() => {}} />
      </Router>
    </QueryClientProvider>
  );

  return {
    queryClient,
  };
};

describe("<InputDefault />", () => {
  test("should to render in the screen", () => {
    renderComponent();
    const inputDefault = screen.getByPlaceholderText("test");

    expect(inputDefault).toBeInTheDocument();
  });

  test("should to show value typing correctly in the input", () => {
    renderComponent();
    const inputDefault = screen.getByPlaceholderText(
      "test"
    ) as HTMLInputElement;

    expect(inputDefault).toBeInTheDocument();

    fireEvent.change(inputDefault, { target: { value: "I have two apples" } });

    expect(inputDefault.value).toBe("I have two apples");
  });

  test("should to limit length of caracteres in input", () => {});
  test("should to add different type in the input", () => {});
});
