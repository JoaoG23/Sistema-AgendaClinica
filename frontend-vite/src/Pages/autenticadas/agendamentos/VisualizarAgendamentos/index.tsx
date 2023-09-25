import { useNavigate, useParams } from "react-router-dom";
import { BsFillTrash2Fill } from "react-icons/bs";
import React from "react";

import { Formulario } from "./components/Formulario";
import { Card } from "../../../../Components/cards/Card";
import { Button } from "../../../../Components/Buttons/Button";

import { Container, Header } from "./styles";
import { MdModeEdit } from "react-icons/md";

export const VisualizarAgendamento: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <Card>
      <Container>
        <Header>
          <h2>Visualizar Agendamento</h2>
          <div>
            <Button
              primary
              onClick={() => navigate(`/agendamentos/editar/${id}`)}
            >
              <MdModeEdit size={20} />
            </Button>
            <Button
              padrao
              onClick={() => navigate(`/agendamentos/deletar/${id}`)}
            >
              <BsFillTrash2Fill size={18} />
            </Button>
          </div>
        </Header>
        <Formulario />
      </Container>
    </Card>
  );
};
