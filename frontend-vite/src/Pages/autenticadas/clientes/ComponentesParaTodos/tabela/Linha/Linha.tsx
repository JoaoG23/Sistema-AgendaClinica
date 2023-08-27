import { BsEyeFill, BsFillPersonFill, BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as Clientes from "./styles";

import { ClienteVisualizado } from "../../../../../../types/cliente/ClienteVisualizado";
import { Card } from "../../../../../../Components/cards/Card";
import { Button } from "../../../../../../Components/Buttons/Button";

type Props = {
  cliente?: ClienteVisualizado;
};

export const ListaClientes: React.FC<Props> = ({ cliente }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Clientes.Container>
        <Clientes.ContainerCard>
          <BsFillPersonFill size={75} color="#43B4DC" />
          <Clientes.ListaItems>
            <li>
              <strong>Nome: </strong> {cliente?.nome_completo}
            </li>
            <li>
              <strong>Ativo: </strong> {cliente?.isAtivado}
            </li>
            <li>
              <strong>Login: </strong> {cliente?.usuarios?.login}
            </li>
            <li>
              <strong>Telefone: </strong>
              {cliente?.usuarios?.telefone}
            </li>
            <li>
              <strong>E-mail: </strong>
              {cliente?.usuarios?.email}
            </li>
          </Clientes.ListaItems>
        </Clientes.ContainerCard>
        <Clientes.ContainerButton>
          <Button padrao onClick={() => navigate(`deletar/${cliente?.id!}`)}>
            <BsEyeFill size={18} />
          </Button>
          <Button secondary onClick={() => navigate(`editar/${cliente?.id!}`)}>
            <BsPencilFill size={18} />
          </Button>
          <Button tertiary onClick={() => navigate(`deletar/${cliente?.id!}`)}>
            <BsFillTrashFill size={18} />
          </Button>
        </Clientes.ContainerButton>
      </Clientes.Container>
    </Card>
  );
};
