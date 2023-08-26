import styled from "styled-components";

const corPadrao: string = "#43B4DC";
const corSegundaria: string = "gray";
const corTerceira: string = "#fff";
const sombra: string = "#9c9c9c25";

export const Container = styled.div`
  color: ${corSegundaria};
  width: 14vw;
  height: 100vh;

  position: fixed;
  left: 0px;

  display: flex;
  flex-direction: column;

  gap: 1em;

  background-color: ${corTerceira};
  box-shadow: 1px 1px 3px ${sombra};

  @media only screen and (max-width: 768px) {
    display: none;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 768px) {
    width: 40px;
  }
`;

export const Menu = styled.ul`
  padding: 1em;
  display: grid;
  gap: 0.2em;

  justify-content: center;
  li {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1em;

    padding: 0.3em;
    :hover {
      animation: aparecer 0.5s ease-in-out forwards;
      a {
        animation: aparecer 0.5s ease-in-out forwards;
      }
    }
  }

  @keyframes aparecer {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
      color: ${corPadrao};
    }
  }
`;

export const DropDown = styled.details`
  summary {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 4px;

    padding: 0.5em;
    :hover {
      animation: aparecer 0.5s ease-in-out forwards;
      a {
        animation: aparecer 0.5s ease-in-out forwards;
      }
    }
  }
`;

export const CabecalhoUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 12px;
  color: ${corSegundaria};
`;
