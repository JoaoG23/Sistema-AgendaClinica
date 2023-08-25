import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 5px;
  font-size: small;
  padding: 20px;

  gap: 0.2em;

  box-shadow: 1px 1px 5px #717f953a;

  background-color: #fff;
  color: #717f95;
  animation: entradaSuave 0.6s ease-out;

  @media screen and (max-width: 600px) {
    padding: 15px;
    border-radius: 0.1em;

  }


  /* @media screen and (max-width: 320px) {
    font-size: medium;
    border-radius: 1.5em;

    div {
      flex-direction: column;
      gap: 0.2em;
    }
    section {
      flex-direction: column;
      gap: 0.2em;
    }
  }  */
`;