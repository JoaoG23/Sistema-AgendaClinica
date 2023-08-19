import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";

import * as Alerta from "./styles";
type Props = {
  mensagem: string;
};

export const AlertCampoVazio: React.FC<Props> = ({ mensagem }) => {
  return (
    <Alerta.Alerta>
      <BsFillXCircleFill />
      {mensagem}
    </Alerta.Alerta>
  );
};
