import React from "react";

import * as Style from "./styles";

type Childrens = {
  children?: string;
};

export const Titulo: React.FC<Childrens> = ({ children }) => {
  return <Style.Titulo>{children}</Style.Titulo>;
};
