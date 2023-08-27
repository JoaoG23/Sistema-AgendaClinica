import styled from "styled-components";

export type TipoBotao = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  padrao?: boolean;
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
    props.primary
      ? `
        background-color: #1FCD6C;
        color: white;
      `
      : props.secondary
      ? `
        background-color: #F0A738;
        color: white;
      `
      : props.tertiary
      ? `
        background-color: #E55356;
        color: white;
      `
      : props.padrao
      ? `
        background-color: #41B5DC;
        color: white;
      `
      : `
        background-color: #F2F9FA;
        color: #41B5DC;
      `}

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
      box-shadow: 0px 0px 11px #66666670;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    padding: 1em;
  }
`;
