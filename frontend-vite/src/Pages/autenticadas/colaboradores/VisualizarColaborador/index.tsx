import React from "react";
import { Formulario } from "./components/Formulario";
import { Card } from "../../../../Components/cards/Card";
import { Container } from "./styles";

export const VisualizarColaborador: React.FC = () => {
  return (
    <Card>
      <Container>
        <h2>Visualizar Colaborador</h2>
        <Formulario />
      </Container>
    </Card>
  );
};
