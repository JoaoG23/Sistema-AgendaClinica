import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Campo = styled(ReactInputMask)`
  border: none;
  border-bottom: 2px solid rgb(239, 239, 239);
  color: gray;
  padding-bottom: 0.5em;

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
      border-bottom: 2px solid #31d0d4;
      transform: translateY(0.4vh);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0.5em;
  }
`;
export const ContainerInput = styled.div`
  display: grid;
`;
