import {
  BsEyeFill,
  BsFillPersonFill,
  BsFillTrashFill,
  BsPencilFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as Agendamentos from "./styles";

import { Card } from "../../../../../../Components/cards/Card";
import { Button } from "../../../../../../Components/Buttons/Button";

import { Agendamento } from "../../../../../../types/agendamento/Agendamento";

type Props = {
  agendamento?: Agendamento;
};

export const ListaAgendamentos: React.FC<Props> = ({ agendamento }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Agendamentos.Container>
        <Agendamentos.ContainerCard>
          <BsFillPersonFill size={75} color="#43B4DC" />
          <Agendamentos.ListaItems>
            {/* <li>
              <strong>Ativo: </strong>
              {agendamento?.isAtivado ? (
                <Badge descricao="Sim" />
              ) : (
                <Badge error descricao="Não" />
              )}
            </li> */}
          </Agendamentos.ListaItems>
        </Agendamentos.ContainerCard>
        <Agendamentos.ContainerButton>
          <Button padrao onClick={() => navigate(`visualizar/${agendamento?.id!}`)}>
            <BsEyeFill size={18} />
          </Button>
          <Button padrao onClick={() => navigate(`editar/${agendamento?.id!}`)}>
            <BsPencilFill size={18} />
          </Button>
          <Button padrao onClick={() => navigate(`deletar/${agendamento?.id!}`)}>
            <BsFillTrashFill size={18} />
          </Button>
        </Agendamentos.ContainerButton>
      </Agendamentos.Container>
    </Card>
  );
};
