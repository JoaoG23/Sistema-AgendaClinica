import styled from "styled-components";

export const CardContainer = styled.div`
  font-size: small;
  padding: 1em;
  border-radius: 1em;
  border: #DFE2E6;

  gap: 0.2em;

  box-shadow: 1px 1px 3px #717f953a;

  background-color: #fff;
  color: #717f95;
  animation: entradaSuave 0.6s ease-out;

  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`;
