import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { describe, test, vi } from "vitest";
import { Login } from ".";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

const mockNavigate = vi.fn();

describe("<Login />", () => {
  test("should to render in the screen", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Login />
        </Router>
      </QueryClientProvider>
    );

    const title = screen.getByText("Login");
    const subtitle = screen.getByText("Acesse o seu cadastro aqui");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});
