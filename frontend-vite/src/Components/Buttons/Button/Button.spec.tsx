import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Button } from ".";

describe("<Button />", () => {
  const queryClient = new QueryClient();

  test("should to render in the screen", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Button color="primary" onClick={() => {}}>
            Testado
          </Button>
        </Router>
      </QueryClientProvider>
    );
    const button = screen.getByText("Testado");
    expect(button).toBeInTheDocument();
  });

  test("should renders a clickable button", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Button color="primary" onClick={() => {}}>
            Testado
          </Button>
        </Router>
      </QueryClientProvider>
    );
    const button = screen.getByText("Testado");
    fireEvent.click(button);
  });

  test("should to able select the color and style of button for attribute (color)", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Button color="final" onClick={() => {}}>
            Color
          </Button>
        </Router>
      </QueryClientProvider>
    );

    const button = screen.getByText("Color");
    const classExpected =
      "bg-red-400 text-gray-50 shadow-res-500/50 hover:bg-red-500 ease-in duration-300";
    expect(button).toHaveClass(classExpected);
  });
});
