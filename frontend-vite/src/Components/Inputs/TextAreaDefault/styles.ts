import styled from "styled-components";

export const Campo = styled.textarea`
  border: none;
  border-bottom: 2px solid rgb(231, 239, 239);
  border-left: 2px solid rgb(231, 239, 239);
  border-right: 2px solid rgb(231, 239, 239);
  color: gray;
  height: 8vh;
  padding: 3px;

  :focus {
    animation-name: abaixarTextareaNoBody;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-timing-function: ease;
    animation-direction: alternate;
    animation-fill-mode: both;
  }

  ::placeholder {
    color: gray;
  }

  @keyframes abaixarTextareaNoBody {
    0% {
      transform: translateY(0vh);
    }

    100% {
      border-bottom: 2px solid #31d0d4;
      border-left: 2px solid #31d0d4;
      border-right: 2px solid #31d0d4;
      transform: translateY(0.4vh);
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0.5em;
  }
`;
export const ContainerInput = styled.div`
  display: grid;
  gap: 10px;
`;
