import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { describe, test } from "vitest";
import { FieldsForm } from ".";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

type Fields = {
  login: string;
  senha: string;
};

describe("<FieldsForm />", () => {
  test("should to render in the screen", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <FieldsForm onSubmit={() => {}} />
        </Router>
      </QueryClientProvider>
    );

    const usuarioInput = screen.getByText("Usuário");
    const senhaInput = screen.getByLabelText("Senha");
    const buttonLogar = screen.getByText("Logar");

    expect(usuarioInput).toBeInTheDocument();
    expect(senhaInput).toBeInTheDocument();
    expect(buttonLogar).toBeInTheDocument();
  });

  test("should to send data in the (onSubmit) on submit", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <FieldsForm
            onSubmit={(valuesField: Fields) => console.log(valuesField)}
          />
        </Router>
      </QueryClientProvider>
    );

    const usuarioInput = screen.getByLabelText("Usuário");
    const senhaInput = screen.getByLabelText("Senha");
    const buttonLogar = screen.getByText("Logar");

    fireEvent.change(usuarioInput, {
      target: { value: "joaodev" },
    });
    fireEvent.change(senhaInput, {
      target: { value: "teste items" },
    });

    fireEvent.click(buttonLogar);
  });
});
