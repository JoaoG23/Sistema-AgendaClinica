import { BsFillPersonFill, BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as Clientes from "./styles";

import { ClienteVisualizado } from "../../../../../../types/cliente/ClienteVisualizado";
import { Card } from "../../../../../../Components/cards/Card";
import { SecondaryButton } from "../../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { RedFont } from "../../../../../../Components/FontColor/RedFont";

type Props = {
  cliente: ClienteVisualizado;
};

export const ListaClientes: React.FC<Props> = ({ cliente }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Clientes.Container>
        <Clientes.ContainerCard>
          <BsFillPersonFill size={80} color="#7e62f3"/>
          <Clientes.ListaItems>
            <li>
              <strong>Nome: </strong> {cliente.nome_completo}
            </li>
            <li>
              <strong>Ativo: </strong> {cliente.isAtivado}
            </li>
            <li>
              <strong>Login: </strong> {cliente.usuarios?.login}
            </li>
            <li>
              <strong>Telefone: </strong>
              {cliente.usuarios?.telefone}
            </li>
            <li>
              <strong>E-mail: </strong>
              {cliente.usuarios?.email}
            </li>
          </Clientes.ListaItems>
        </Clientes.ContainerCard>
        <Clientes.ContainerButton>
          <SecondaryButton onClick={() => navigate(`deletar/${cliente.id!}`)}>
            <BsFillTrashFill size={18} />
          </SecondaryButton>
        </Clientes.ContainerButton>
      </Clientes.Container>
    </Card>
  );
};
