import styled from "styled-components";

export const Light = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: 0.6px solid rgba(242, 183, 41, .3);
  background-color:#F2E049;
  color: #fff;
  border-radius: 5px;
  padding: 8px;

  box-shadow: 0 0 2px gray;

  :hover {
    animation: mudarCorEReduzTamanho 0.5s ease alternate both;
  }

  @keyframes mudarCorEReduzTamanho {
    from {
      transform: scale(1);
      box-shadow: 1px 1px 10px #f2e1493c;
    }

    to {
      transform: scale(0.9);
      box-shadow: 0px 0px 13px #f2e149b4;
    }
  }

  @media screen and (max-width: 600px) {
    display: flex;
    width: 95%;
    padding: 1em;
  }
`;
