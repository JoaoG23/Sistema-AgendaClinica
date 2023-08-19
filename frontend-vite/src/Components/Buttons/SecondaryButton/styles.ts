import styled from "styled-components";

export const DefaultStyle = styled.button`
  border: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background-color: #F28C79;
  border-radius: 5px;

  color: #fff;
  padding: 8px;
  background-size: 200% 200%;

  box-shadow: 1px 1px 2px #f28b79c0;

  :hover {
    animation: mudarCorEReduzTamanho 0.8s ease forwards;
  }

  /* background-image: linear-gradient(
    to right,
    #1ed49d 0%,
    #1bc390 50%,
    #17a97d 80%,
    #128864 100%
  );
  background-size: 200% 200%; */

  /* @keyframes changeColor {
    from {
    transform: translateY(0vh);
      background-position: 200 0;
    }

    to {
    transform: translateY(-4px);
      background-position: 200% 100%;
    }
  } */

  @keyframes mudarCorEReduzTamanho {
    from {
      transform: scale(1);
      box-shadow: 1px 1px 10px #f28b7938;
    }

    to {
      transform: scale(0.9);
      box-shadow: 0px 0px 13px #f28b79c0;
    }
  }

  @media screen and (max-width: 600px) {

    display: flex;
    width: 100%;
    padding: 1em;

  }
`;
