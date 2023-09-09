import { ClientesRotas } from "./ClientesRotas";
import { ColaboradoresRotas } from "./ColaboradoresRotas";
import { UsuariosRotas } from "./UsuariosRotas";

export const AutenticadasRotas = () => {
  return (
    <>
      <UsuariosRotas />
      <ClientesRotas />
      <ColaboradoresRotas />
    </>
  );
};

