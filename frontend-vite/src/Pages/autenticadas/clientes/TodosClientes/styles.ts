import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  gap: 1em;
  color: #424651;
  @media screen and (max-width: 769px) {
    justify-content: center;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin: 0.1em;

    div {
      display: flex;
      gap: 6px;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 1em;
    }
  }
`;
export const Pesquisa = styled.div`
  margin-bottom: 1px;
`;

