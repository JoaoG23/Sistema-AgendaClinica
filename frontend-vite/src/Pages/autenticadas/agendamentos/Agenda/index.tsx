import React from "react";

import { Card } from "../../../../Components/cards/Card";
import { Titulo } from "../../../../Components/Title";

import { Calendario } from "./Calendario";

export const Agendamentos: React.FC = () => {
  return (
    <Card>
      <Titulo>Calendário de Agendamentos</Titulo>
      <Calendario />
    </Card>
  );
};
