import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

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

    const titulo = screen.getByText("Login");
    expect(titulo).toBeInTheDocument();

    const registrarClienteLink = screen.getByText("Você ainda não tem conta?");
    expect(registrarClienteLink).toBeInTheDocument();
  });
  test("to s in the all links of page", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Form />
        </Router>
      </QueryClientProvider>
    );

    const registrarClienteLink = screen.getByText("Você ainda não tem conta?");
    fireEvent.click(registrarClienteLink);
    const esqueciSenhaLink = screen.getByText("Esqueci minha senha?");
    fireEvent.click(esqueciSenhaLink);



    
  });
});
