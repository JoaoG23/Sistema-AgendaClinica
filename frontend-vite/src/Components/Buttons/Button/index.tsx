import React from "react";
import * as Styles from "./styles";

type Propriedades = Styles.TipoBotao & {
  children?: string | JSX.Element | JSX.Element[];
  onClick?: any;
};



export const Button: React.FC<Propriedades> = ({ onClick, children, tipo }) => {
  return (
    <Styles.Button tipo={tipo} onClick={onClick}>
      {children}
    </Styles.Button>
  );
};
