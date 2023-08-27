import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  gap: 0.5em;
  border: 0.6px solid #fbfbfb;
  border-radius: 0.7em;
  color: #717f95;

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: #41b5dc;
    border-radius: 2em;
    color: #fff;
    padding: 0.6em;

    box-shadow: 0 0 2px #41b5dc;

    :hover {
      animation: mudarCorBotaoPaginacao 0.5s ease alternate both;
    }

    @keyframes mudarCorBotaoPaginacao {
      from {
        transform: translateY(0vh);
      }

      to {
        border: 0.6px solid #41b5dc;
        background-color: #ffff;
        color: #41b5dc;
        transform: translateY(-5px);
      }
    }

    @media screen and (max-width: 600px) {
      padding: 1em;
    }
  }
  strong{
    color: #5592E3;
  }
`;

export const NumeroPaginas = styled.div`
  display: flex;
  gap: 0.1em;
`;
