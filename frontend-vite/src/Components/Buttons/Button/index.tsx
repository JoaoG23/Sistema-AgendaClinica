import React from "react";
import * as Styles from "./styles";

type Propriedades = Styles.TipoBotao & {
  children?: string | JSX.Element | JSX.Element[];
  onClick?: any;
};

export const Button: React.FC<Propriedades> = ({
  onClick,
  children,
  padrao,
  primary,
  secondary,
  tertiary,
}) => {
  return (
    <Styles.Button
      primary={primary}
      padrao={padrao}
      secondary={secondary}
      tertiary={tertiary}
      onClick={onClick}
    >
      {children}
    </Styles.Button>
  );
};
