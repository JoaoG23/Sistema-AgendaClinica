import React from "react";
import { Color } from "./styles";
type Props = {
  descricao?: string;
  error?: boolean;
};
export const Badge: React.FC<Props> = ({ descricao, error }) => {
  return <Color error={error}>{descricao}</Color>;
};
