import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { describe, test, vi } from "vitest";
import { Form } from "./";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

const mockNavigate = vi.fn();

// Para mockar importacao ....
vi.mock("react-router", () => ({
  ...vi.importActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("<Form />", () => {
  test("should to render in the screen", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Form />
        </Router>
      </QueryClientProvider>
    );

    const titulo = screen.getByText("Registrar Cliente");
    expect(titulo).toBeInTheDocument();

    const loginButton = screen.getByText("Deseja se logar?");
    expect(loginButton).toBeInTheDocument();
  });
});
