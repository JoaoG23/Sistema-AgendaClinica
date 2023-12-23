import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { describe, test, vi } from "vitest";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { TitleLarge } from ".";

describe("<TitleLarge />", () => {
  test("should to render in the screen", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <TitleLarge />
        </Router>
      </QueryClientProvider>
    );
  });
  test("to render component with title (Novo Titulo)", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <TitleLarge>Novo Titulo</TitleLarge>
        </Router>
      </QueryClientProvider>
    );

    const senhaInput = screen.getByText("Novo Titulo");
    expect(senhaInput).toBeInTheDocument();
  });
});
