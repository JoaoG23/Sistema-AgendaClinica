import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { describe, test } from "vitest";
import { FieldsForm } from ".";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

type Fields = {
  username: string;
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

    const nomeUsuarioInput = screen.getByLabelText("Nome e Sobrenome");
    expect(nomeUsuarioInput).toBeInTheDocument();

    const usuarioInput = screen.getByLabelText("Usuário");
    expect(usuarioInput).toBeInTheDocument();

    const telefoneInput = screen.getByLabelText("Telefone");
    expect(telefoneInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText("E-mail");
    expect(emailInput).toBeInTheDocument();

    const senhaInput = screen.getByLabelText("Senha");
    expect(senhaInput).toBeInTheDocument();

    const senhaConfirmadaInput = screen.getByLabelText("Senha Confirmada");
    expect(senhaConfirmadaInput).toBeInTheDocument();

    const buttonLogar = screen.getByText("Registrar");
    expect(buttonLogar).toBeInTheDocument();
  });

  test("check if fields (Senha and Senha Confirmada) is type password", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <FieldsForm onSubmit={() => {}} />
        </Router>
      </QueryClientProvider>
    );

 
    const senhaInput = screen.getByLabelText("Senha");
    expect(senhaInput).toHaveAttribute('type', 'password');

    const senhaConfirmadaInput = screen.getByLabelText("Senha Confirmada");
    expect(senhaConfirmadaInput).toHaveAttribute('type', 'password');

  
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
    const nomeUsuarioInput = screen.getByLabelText("Nome e Sobrenome");
    fireEvent.change(nomeUsuarioInput, {
      target: { value: "Marrone Carlos" },
    });

    const usuarioInput = screen.getByLabelText("Usuário");
    fireEvent.change(usuarioInput, {
      target: { value: "marrone1" },
    });

    const telefoneInput = screen.getByLabelText("Telefone");
    fireEvent.change(telefoneInput, {
      target: { value: "3199999999" },
    });

    const emailInput = screen.getByLabelText("E-mail");
    fireEvent.change(emailInput, {
      target: { value: "email@email.com" },
    });

    const senhaInput = screen.getByLabelText("Senha");
    fireEvent.change(senhaInput, {
      target: { value: "marrone1" },
    });
    const senhaConfirmadaInput = screen.getByLabelText("Senha Confirmada");
    fireEvent.change(senhaConfirmadaInput, {
      target: { value: "confirmada" },
    });

    const buttonLogar = screen.getByText("Registrar");

    fireEvent.click(buttonLogar);
  });
});
