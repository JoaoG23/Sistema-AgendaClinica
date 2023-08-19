import styled from "styled-components";

export const Container = styled.div`
  width: 84vw;
  height: 60px;

  display: flex;
  align-items: center;

  font-weight: 300;
  position: absolute;
  top: 0em;
  right: 0em;

  padding: 1em;

  justify-content: space-between;

  background-color: #fff;
  box-shadow: 2px 2px 4px #00000027;
  color: gray;
  a {
    color: #c6c0c7;
  }
  @media only screen and (max-width: 768px) {
    height: 40px;
    height: 10vh;
  }
`;

export const TextLimited = styled.p`
  width: 90px;
  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media only screen and (max-width: 768px) {
    width: 50px;
  }
`;

export const Item = styled.button`
  display: flex;
  gap:.5em;
  padding: 10px;
  align-content: center;

  height: 10vh;
  border: none;
  background-color: transparent;


  color:gray;

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
`;


export const ItemsLadoDireito = styled.div`
  display: flex;
`;

export const VoltarText = styled.p`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
