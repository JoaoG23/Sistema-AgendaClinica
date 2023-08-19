import styled from "styled-components";

export const Alerta = styled.div`
  border-radius: 3px;
  font-size: small;

  display: flex;

  align-items: center;
  gap: 3px;
  padding: 0.3em;
  border: 0.4px solid tomato;
  background-color: #fff;
  font-weight: 600;

  color: tomato;

  transition: 0.2s;
  animation: balancar 2s linear infinite;
`;
