import {
  BsEyeFill,
  BsFillPersonFill,
  BsFillTrashFill,
  BsPencilFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as Colaboradores from "./styles";

import { Card } from "../../../../../../Components/cards/Card";

import { Button } from "../../../../../../Components/Buttons/Button";
import { Badge } from "../../../../../../Components/Badges/Badge";

import { ColaboradorVisualizado } from "../../../../../../types/colaborador/colaboradorVisualizado";

type Props = {
  colaborador?: ColaboradorVisualizado;
};

export const ListaColaboradores: React.FC<Props> = ({ colaborador }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Colaboradores.Container>
        <Colaboradores.ContainerCard>
          <BsFillPersonFill size={75} color="#43B4DC" />
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
            padrao
            onClick={() => navigate(`visualizar/${colaborador?.id!}`)}
          >
            <BsEyeFill size={18} />
          </Button>
          <Button padrao onClick={() => navigate(`editar/${colaborador?.id!}`)}>
            <BsPencilFill size={18} />
          </Button>
          <Button
            padrao
            onClick={() => navigate(`deletar/${colaborador?.id!}`)}
          >
            <BsFillTrashFill size={18} />
          </Button>
        </Colaboradores.ContainerButton>
      </Colaboradores.Container>
    </Card>
  );
};
