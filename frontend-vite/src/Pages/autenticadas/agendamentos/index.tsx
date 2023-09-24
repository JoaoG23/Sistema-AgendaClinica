import React from "react";
import { Calendario } from "./Calendario";

import * as Calendarios from "./styles";
import { Card } from "../../../Components/cards/Card";

import { Titulo } from "../../../Components/Title";

export const TodosAgendamentos: React.FC = () => {
  return (
    <Card>
      <Titulo>Agendamentos</Titulo>
      <Calendario />
    </Card>
  );
};
