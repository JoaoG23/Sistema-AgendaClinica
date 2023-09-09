import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5em;

  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;

    gap: 0.5em;

    height: 300px;
    overflow-y: scroll;
  }
`;
