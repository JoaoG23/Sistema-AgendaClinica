import styled from "styled-components";


import imageLogin from "../../assets/login-image.png";

export const Formulario = styled.main`
  padding: 3em;
  margin: 10px;
  width: auto;
  display: grid;

  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
  height: auto;
  /* background-color: #f8f8f9; */

  animation: entradaSuave 1s ease alternate both;
  box-shadow: 2px 2px 10px #1ed49d33;

  @media only screen and (max-width: 768px) {
    justify-items:stretch;

    text-align: center;
    width: 90%;
    padding: .7em;
  }
`;
export const LoginContainer = styled.main`
   padding: 2em;
   height: 100vh;
  background-color: #f8f8f9;
  animation: entradaSuave 1s ease alternate both;

  display: grid;
  align-content: center;
  justify-items:center;
  
  @media only screen and (max-width: 768px) {
    justify-items:stretch;

    text-align: center;
    width: 90%;
    padding: .7em;
  }
`;
export const ImageLateral = styled.img`

    width: 70vw;
`;


export const ContainerMain = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: wrap;

  background-color:#7E62F3;
  
  position: fixed;
  top: 0;
  z-index: 2;
  align-items: center;

  @media only screen and (max-width: 768px) {
    background-image: none;
    display: flex;
    background-color:#7E62F3;
  }
`;
