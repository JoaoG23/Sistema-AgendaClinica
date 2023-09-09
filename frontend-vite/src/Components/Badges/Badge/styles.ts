import styled from "styled-components";

export type TipoBotao = {
  error?: boolean;
};

export const Color = styled.span<TipoBotao>`
  ${(props) =>
    props.error
      ? `
        background-color: #E55356;
        color: white;
      `
      : `
        background-color: #1FCD6C;
        color: white;
      `};

  padding-left: 10px ;
  padding-right: 10px ;
  border-radius: 3px;
  font-weight: 500;
  box-shadow: 1px 1px 1px #3131311c;
`;
