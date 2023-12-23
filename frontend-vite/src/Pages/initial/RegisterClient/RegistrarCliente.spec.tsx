import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { describe, test, vi } from "vitest";
import { Registrar } from ".";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";


describe("<Registrar />", () => {
  test("should to render in the screen", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Registrar />
        </Router>
      </QueryClientProvider>
    );

    const title = screen.getByText("Registre-se cliente");
    const subtitle = screen.getByText("Crie o seu cadastro aqui cliente");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
