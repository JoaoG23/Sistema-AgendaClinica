import { Formulario } from "./Formulario/Formulario";

import { ContainerMain, LoginContainer } from "./styles";

export const RegistrarCliente: React.FC = () => {
  return (
    <ContainerMain>
      <LoginContainer>
        <h3>Você quer se cadastrar</h3>
        <h5>Preenchar o formulário abaixo e se cadastre</h5>
        <Formulario />
      </LoginContainer>
    </ContainerMain>
  );
};

