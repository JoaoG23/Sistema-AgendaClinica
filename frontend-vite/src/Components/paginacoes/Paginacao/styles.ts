import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #7e62f3;
  border-radius: 0.4em;
  color: #fff;
  padding: 0.6em;

  box-shadow: 0 0 2px gray;

  :hover {
    animation: changeColor 0.5s ease alternate both;
  }

  @keyframes changeColor {
    from {
      transform: translateY(0vh);
    }

    to {
      border: 0.6px solid #7e62f3;
      background-color: #ffff;
      color: #7e62f3;
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
