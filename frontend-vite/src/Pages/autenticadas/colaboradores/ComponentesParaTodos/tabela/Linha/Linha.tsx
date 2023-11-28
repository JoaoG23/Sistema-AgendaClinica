import {
  BsEyeFill,
  BsFillPersonFill,
  BsFillTrash2Fill,
  BsFillTrashFill,
  BsPencilFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as Colaboradores from "./styles";

import { Card } from "../../../../../../Components/cards/Card";

import { Button } from "../../../../../../Components/Buttons/Button";
import { Badge } from "../../../../../../Components/Badges/Badge";

import { ColaboradorVisualizado } from "../../../../../../types/colaborador/colaboradorVisualizado";
import { MdModeEdit } from "react-icons/md";

type Props = {
  colaborador?: ColaboradorVisualizado;
};

export const ListaColaboradores: React.FC<Props> = ({ colaborador }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Colaboradores.Container>
        <Colaboradores.ContainerCard>
          <BsFillPersonFill size={75} color="#A41DE7" />
          <Colaboradores.ListaItems>
            <li>
              <strong>Nome: </strong> {colaborador?.nome_completo}
            </li>
            <li>
              <strong>Ativo: </strong>
              {colaborador?.isAtivado ? (
                <Badge descricao="Sim" />
              ) : (
                <Badge error descricao="Não" />
              )}
            </li>
            <li>
              <strong>Login: </strong> {colaborador?.usuarios?.login}
            </li>
            <li>
              <strong>Telefone: </strong>
              {colaborador?.usuarios?.telefone}
            </li>
            <li>
              <strong>E-mail: </strong>
              {colaborador?.usuarios?.email}
            </li>
          </Colaboradores.ListaItems>
        </Colaboradores.ContainerCard>
        <Colaboradores.ContainerButton>
          <Button
            tipo="primary"
            onClick={() => navigate(`visualizar/${colaborador?.id!}`)}
          >
            <BsEyeFill size={18} />
          </Button>
          <Button
            tipo="tertiary"
            onClick={() => navigate(`editar/${colaborador?.id!}`)}
          >
            <MdModeEdit size={18} />
          </Button>
          <Button
            tipo="secondary"
            onClick={() => navigate(`deletar/${colaborador?.id!}`)}
          >
            <BsFillTrash2Fill size={18} />
          </Button>
        </Colaboradores.ContainerButton>
      </Colaboradores.Container>
    </Card>
  );
};
