import { endpoint } from "../../../../../services/endpoint";

export async function deletarClientePorId(id: string) {
  const resposta = await endpoint.delete(`/clientes/${id}`);
  return resposta;
}
