import { endpoint } from "../../../../services/endpoint";
import { RegistroClienteUsuario } from "../../../../types/autenticacao/RegistroClienteUsuario";

export async function registrarUsuarioCliente(cliente: RegistroClienteUsuario) {
  const resposta = await endpoint.post(`/auth/registrar/cliente`, cliente);
  return resposta;
}
