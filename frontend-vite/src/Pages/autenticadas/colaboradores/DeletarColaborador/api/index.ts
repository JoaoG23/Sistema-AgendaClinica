import { endpoint } from "../../../../../services/endpoint";

export async function deletarColaboradorPorId(id: string) {
  const resposta = await endpoint.delete(`/colaboradores/${id}`);
  return resposta;
}
