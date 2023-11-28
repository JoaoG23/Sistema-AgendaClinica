import { endpoint } from "../../../services/endpoint";
import { LoginUsuario } from "../../../types/autenticacao/LoginUsuario";
import { ClienteUsuario } from "../../../types/cliente/ClienteUsuario";

export async function registrarCliente(cliente: ClienteUsuario) {
  const resposta = await endpoint.post(`/clientes`, cliente);
  return resposta;
}
