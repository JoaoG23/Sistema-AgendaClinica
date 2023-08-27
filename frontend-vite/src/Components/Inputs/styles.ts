import styled from "styled-components";

export const NoBorders = styled.input`
  padding: 8px;

  border: 1px solid rgb(239, 239, 239);
  color: gray;
  border-radius: 1.5em;

  :focus {
    animation-name: toRight;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-direction: alternate;
    animation-fill-mode: both;
  }

  ::placeholder {
    color: gray;
  }

  @keyframes toRight {
    0% {
      transform: translateX(0vw);
    }

    100% {
      transform: translateX(0.3vw);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 1em;
  }
`;
export const ContainerInput = styled.div`
  display: grid;
  gap: 2px;
  strong{
    padding: 5px;
  }

`;

export const SecondaryInputStyle = styled(NoBorders);
