import styled from "styled-components";

export const UmaColuna = styled.section`
  display: grid;
  gap: 1em;
  margin: 0.4em;
  grid-template-columns: 1fr;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const DuasColuna = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 0.4em;
  gap: 1em;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
export const FlexColuna = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1em;

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const Container = styled.form`
  display: grid;
  gap: 0.5em;

  animation: entradaSuave 0.5s ease alternate both;

  footer{
    display: flex;
    justify-content: space-between;
  }
`;
