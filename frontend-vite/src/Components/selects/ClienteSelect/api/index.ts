import { endpoint } from "../../../../services/endpoint";

export async function buscarTodosClientes() {
  const resposta = await endpoint.get(`/clientes`);
  return resposta;
}
