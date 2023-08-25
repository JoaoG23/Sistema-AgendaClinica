import styled from "styled-components";

export const Container = styled.div`
  width: 16vw;
  height: 100vh;

  position: fixed;
  left: 0px;

  display: flex;
  flex-direction: column;

  gap: 1em;

  background-color: #fff;

  box-shadow: 1px 1px 3px #00000027;

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

export const Menu = styled.ul``;

export const Elementos = styled.ul`
  /* border-radius: 8px;

  li {
    padding: 3px;
    display: flex;
    gap: 1em;
    border-radius: 0.7em;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  li:hover {
    transition: 0.3s;
    animation: balancar 2s linear infinite;

    background-color: #0000003f;
  } */
`;

export const ItemMenu = styled.li`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7e62f3;
  border-radius: 4px;

  padding: 0.5em;
  padding-left: 0.8em;
  padding-right: 0.8em;
  a {
    color: #7e62f3;
  }
  :hover {
    animation: aparecer 0.5s ease-in-out forwards;
    a {
      animation: aparecer 0.5s ease-in-out forwards;
    }
  }

  @keyframes aparecer {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
      background-color: #7e62f3;
      color: #fff;
    }
  }
`;
export const ColecaoElementos = styled.summary`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7e62f3;
  border-radius: 4px;

  padding: 0.5em;
  :hover {
    animation: aparecer 0.5s ease-in-out forwards;
    a {
      animation: aparecer 0.5s ease-in-out forwards;
    }
  }

  @keyframes aparecer {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
      background-color: #7e62f3;
      color: #fff;
    }
  }
`;

export const CabecalhoUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 12px;
  background-color: #7e62f3;
  color: #fff;
`;
