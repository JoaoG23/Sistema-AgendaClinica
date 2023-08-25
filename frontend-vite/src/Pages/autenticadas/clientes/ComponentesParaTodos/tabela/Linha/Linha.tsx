import { BsFillTrashFill } from "react-icons/bs";
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
        <Clientes.ListaItems>
          <li>
            <strong>Nome: </strong> {cliente.nome_completo!}
          </li>
          <li>
            <strong>Login: </strong>
            {/* <GreenFont>{cliente.login!}</GreenFont> */}
          </li>
          <li>
            <strong>Senha: </strong>
            <RedFont>*************</RedFont>
          </li>
        </Clientes.ListaItems>
        <Clientes.ContainerButton>
          <SecondaryButton onClick={() => navigate(`deletar/${cliente.id!}`)}>
            <BsFillTrashFill size={21} />
          </SecondaryButton>
        </Clientes.ContainerButton>
      </Clientes.Container>
    </Card>
  );
};
