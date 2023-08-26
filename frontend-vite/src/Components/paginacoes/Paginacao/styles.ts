import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #578FE4;
  border-radius: 0.4em;
  color: #fff;
  padding: 0.6em;

  box-shadow: 0 0 2px gray;

  :hover {
    animation: mudarCorBotaoPaginacao 0.5s ease alternate both;
  }

  @keyframes mudarCorBotaoPaginacao {
    from {
      transform: translateY(0vh);
    }

    to {
      border: 0.6px solid #578FE4;
      background-color: #ffff;
      color: #578FE4;
      transform: translateY(-5px);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1em;
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 5px;
  align-items: center;
  gap: 0.5em;
  border: 0.6px solid #fbfbfb;
  border-radius: 0.7em;
  color: #717f95;
`;

export const NumeroPaginas = styled.div`
  display: flex;
  gap: 0.1em;
`;
