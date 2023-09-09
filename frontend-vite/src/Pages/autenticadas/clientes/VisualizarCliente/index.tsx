import React from "react";
import { Formulario } from "./components/Formulario";
import { Card } from "../../../../Components/cards/Card";
import { Container } from "./styles";

export const VisualizarCliente: React.FC = () => {
  return (
    <Card>
      <Container>
        <h2>Visualizar Cliente</h2>
        <Formulario />
      </Container>
    </Card>
  );
};
