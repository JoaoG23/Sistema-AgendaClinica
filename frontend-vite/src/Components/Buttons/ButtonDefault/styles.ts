import styled from "styled-components";


export const DefaultStyle = styled.button`
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;

  background-color: #6B49F2;
  border-radius: 5px;
  color: #fff;

  font-weight: 500;
  padding: 8px;
  background-size: 200% 200%;

  box-shadow: 0 0 3px #6b49f23d;

  :hover {
    animation: mudarCorEReduzTamanho 0.5s ease alternate both;
  }

  @keyframes mudarCorEReduzTamanho {
    from {
      transform: scale(1);
      box-shadow: 1px 1px 10px #6b49f23d;
    }

    to {
      transform: scale(0.9);
      box-shadow: 0px 0px 13px #6b49f2a4;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    padding: 1em;
  }
`;
