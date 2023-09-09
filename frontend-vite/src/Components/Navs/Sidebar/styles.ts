import styled from "styled-components";

const corPadrao: string = "#43B4DC";
const corSegundaria: string = "gray";
const corPrimarias: string = "#3a3a3a";
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

  /* gap: 1em; */

  background-color: ${corTerceira};
  box-shadow: 1px 1px 3px ${sombra};

  @media only screen and (max-width: 858px) {
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
  display: grid;
  padding: 10%;

  li {
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 2em;

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
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 2em;

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
  color: ${corPadrao};
`;
