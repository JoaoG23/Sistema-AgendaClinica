import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { describe, test, expect, vitest } from "vitest";
import { Formulario } from "./Formulario";

import { BrowserRouter as Router, useNavigate } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

const mockNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
}));

describe("<Formulario />", () => {
  test("should to render in the screem", () => {
    const queryClient = new QueryClient();
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <Formulario />
        </Router>
      </QueryClientProvider>
    );
    // const switchButton = getByRole("switch-default");
    // expect(switchButton).toBeInTheDocument();
  });

  //   test("should able get by text inside of (descricaoDesligado to be equal Saida)", () => {
  //     const { getByText } = render(
  //       <Formulario
  //         name={"descricaoDeTeste"}
  //         register={() => {}}
  //         descricaoDesligado="Saida"
  //       />
  //     );
  //     const descricaoDesligado = getByText("Saida");

  //     expect(descricaoDesligado).toBeInTheDocument();
  //   });

  //   test("should able get by text inside of (descricaoLigado equal Entrada)", () => {
  //     const { getByText } = render(
  //       <Formulario
  //         name={"descricaoDeTeste"}
  //         register={() => {}}
  //         descricaoLigado="Entrada"
  //       />
  //     );
  //     const descricaoDesligado = getByText("Entrada");
  //     expect(descricaoDesligado).toBeInTheDocument();
  //   });
  //     test("should toggle on click", () => {
  //       const { register } = useForm();
  //     const { getByTestId } = render(
  //       <Formulario name={"nome"} register={register} />
  //     );
  //     const switchButton = getByTestId("switch");

  //     expect(switchButton).toHaveAttribute("aria-checked", "false");

  //     fireEvent.click(switchButton);

  //     expect(switchButton).toHaveAttribute("aria-checked", "true");
  //   });
});
