import styled from "styled-components";

export const Container = styled.select`
  border: none;
  border-bottom: 2px solid rgb(239, 239, 239);
  color: gray;
  padding: 3px;

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

  option{
    border-radius: 0em;
    background-color: #fff;
    color: #31d0d4;
    :checked{
      color: #fff;
      background-color: #31d0d4;
    }
  }
`;
export const ContainerInput = styled.label`
  display: grid;
  gap: .5em;
  margin-bottom:.5em;
`;



