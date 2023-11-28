import styled from "styled-components";

type Tipo = "primary" | "secondary" | "tertiary" | "padrao";
export type TipoBotao = {
  tipo?: Tipo;
};

interface TipoBotaoStrategy {
  primary: () => string;
  secondary: () => string;
  tertiary: () => string;
  padrao: () => string;
}

const selecionarBotaoStrategyConcrect: TipoBotaoStrategy = {
  primary: () => `background-color: #BBE81E; color: white;`,
  secondary: () => `background-color: #E8701E; color: white;`,
  tertiary: () => `background-color: #A41DE7; color: white;`,
  padrao: () => `background-color: #1EDBE8; color: white;`,
};

export const Button = styled.button<TipoBotao>`
  padding: 8px 20px;
  border: none;
  border-radius: 2em;
  display: flex;
  gap: 0.7em;
  font-weight: 500;
  align-items: center;
  justify-content: center;

  box-shadow: 1px 1px 3px #717f953a;

  ${(props) =>
    selecionarBotaoStrategyConcrect[props?.tipo!] ||
    `background-color: #F2F9FA; color: #794493;`}

  :hover {
    animation: mudarCorEReduzTamanhoButton 0.5s ease alternate both;
  }
  @keyframes mudarCorEReduzTamanhoButton {
    from {
      transform: scale(1);
      box-shadow: 1px 1px 9px #9c9c9c25;
    }

    to {
      transform: scale(0.9);
      box-shadow: 0px 0px 11px #A41DE7;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    padding: 1em;
  }
`;
