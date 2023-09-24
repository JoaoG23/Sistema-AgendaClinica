import React from "react";
import { Formulario } from "./components/Formulario";
import { Card } from "../../../../Components/cards/Card";
import { Container } from "./styles";

export const AdicionarAgendamento: React.FC = () => {
  return (
    <Card>
      <Container>
        <h2>Adicionar Agendamento</h2>
        <Formulario />
      </Container>
    </Card>
  );
};
