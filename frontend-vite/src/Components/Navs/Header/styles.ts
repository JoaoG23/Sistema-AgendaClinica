import styled from "styled-components";

const corPadrao: string = "#a41de7";
const corTerceira: string = "#fff";
const sombra: string = "#8d8d8d2d";
const corQuarternaria: string = "#E8701E";

export const Container = styled.header`
  width: 86vw;
  height: 60px;

  display: flex;
  align-items: center;

  font-weight: 500;
  position: absolute;
  top: 0em;
  right: 0em;

  padding: 0.8em;

  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    ${corPadrao} 0%,
    ${corPadrao} 50%,
    ${corQuarternaria} 100%
  );
  background-size: 200% 200%;

  animation: changeColor 5s ease infinite alternate forwards;

  box-shadow: 2px 2px 4px ${sombra};
  color: ${corTerceira};

  div {
    display: flex;
    gap: 0.8em;
    align-items: center;
  }

  button {
    display: flex;
    align-content: center;

    height: 10vh;
    border: none;
    background-color: transparent;

    color: ${corTerceira};

    align-items: center;
    :hover {
      animation: abaixar 0.2s forwards ease-in;
    }

    @keyframes abaixar {
      0% {
        transform: translateY(0vw);
      }
      100% {
        transform: translateY(0.1vw);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    height: 40px;
    height: 10vh;
  }

  @keyframes changeColor {
    from {
      transform: translateY(0vh);
      background-position: 200 0;
    }

    to {
      transform: translateY(-4px);
      background-position: 100% 200%;
    }
  }
`;
