import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { describe, test } from "vitest";
import { CamposFormulario } from ".";

import { BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

type Fields = {
  nome_completo: string;
  telefone: string;
  login: string;
  email: string;
  senha: string;
};

describe("<CamposFormulario />", () => {
  test("should to render in the screen", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <CamposFormulario funcaoSubmit={() => {}} />
        </Router>
      </QueryClientProvider>
    );

    const nomeInput = screen.getByText("Nome e Sobrenome");
    const telefoneInput = screen.getByText("Telefone");
    const emailInput = screen.getByText("E-mail");
    const usuarioInput = screen.getByText("Usuário");
    const senhaInput = screen.getByText("Senha");
    const senhaConfirmadaInput = screen.getByText("Confirmar senha");
    const buttonLogar = screen.getByText("Registrar");

    expect(usuarioInput).toBeInTheDocument();
    expect(senhaInput).toBeInTheDocument();
    expect(senhaConfirmadaInput).toBeInTheDocument();
    expect(nomeInput).toBeInTheDocument();
    expect(telefoneInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();

    expect(buttonLogar).toBeInTheDocument();
  });

  test("should to send data in the (funcaoSubmit) on submit", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <CamposFormulario
            funcaoSubmit={(valuesField: Fields) => console.log(valuesField)}
          />
        </Router>
      </QueryClientProvider>
    );

    const usuarioInput = screen.getByLabelText("Usuário");
    const senhaInput = screen.getByLabelText("Senha");
    const buttonLogar = screen.getByText("Registrar");
    const nomeInput = screen.getByLabelText("Nome e Sobrenome");
    const senhaConfirmadaInput = screen.getByLabelText("Confirmar senha");
    const telefoneInput = screen.getByLabelText("Telefone");
    const emailInput = screen.getByLabelText("E-mail");

    fireEvent.change(usuarioInput, {
      target: { value: "joaodev" },
    });
    fireEvent.change(senhaInput, {
      target: { value: "senha" },
    });
    fireEvent.change(telefoneInput, {
      target: { value: "(31)9919-9999" },
    });
    fireEvent.change(emailInput, {
      target: { value: "email@email.com" },
    });
    fireEvent.change(nomeInput, {
      target: { value: "João Guilherme" },
    });
    fireEvent.change(senhaConfirmadaInput, {
      target: { value: "mesma senha" },
    });

    fireEvent.click(buttonLogar);
  });
});
