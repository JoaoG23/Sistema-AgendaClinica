import styled from "styled-components";

export const NoBorders = styled.input`
  border: none;
  border-bottom: 2px solid rgb(239, 239, 239);
  color: gray;
  padding: 5px;

  :focus {
    animation-name: abaixarInputNoBody;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-direction: alternate;
    animation-fill-mode: both;
  }

  ::placeholder {
    color: gray;
  }

  @keyframes abaixarInputNoBody {
    0% {
      transform: translateY(0vh);
    }

    100% {
      border-bottom: 2px solid #A41DE7;
      transform: translateY(0.4vh);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0.5em;
  }
`;
export const ContainerInput = styled.div`
  display: grid;

  gap: 0.3em;
`;

export const SecondaryInputStyle = styled(NoBorders);
