import { endpoint } from "../../../../../services/endpoint";

export async function buscarClienteEUsuarioPorId(id: string) {
  const resposta = await endpoint.get(`/clientes/${id}`);
  return resposta;
}

