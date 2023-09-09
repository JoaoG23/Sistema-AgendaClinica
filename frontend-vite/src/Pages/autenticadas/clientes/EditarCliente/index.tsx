import React from "react";
import { Formulario } from "./components/Formulario";
import { Card } from "../../../../Components/cards/Card";
import { Container } from "./styles";

export const EditarCliente: React.FC = () => {
  return (
    <Card>
      <Container>
        <h2>Editar Cliente</h2>
        <Formulario />
      </Container>
    </Card>
  );
};
