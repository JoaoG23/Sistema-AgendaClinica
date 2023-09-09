import React from "react";
import { Formulario } from "./components/Formulario";
import { Card } from "../../../../Components/cards/Card";
import { Container } from "./styles";

export const EditarColaborador: React.FC = () => {
  return (
    <Card>
      <Container>
        <h2>Editar Colaborador</h2>
        <Formulario />
      </Container>
    </Card>
  );
};
