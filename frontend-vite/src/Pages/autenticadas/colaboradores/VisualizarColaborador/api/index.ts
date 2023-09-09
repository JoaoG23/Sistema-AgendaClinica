import { endpoint } from "../../../../../services/endpoint";

export async function buscarColaboradorEUsuarioPorId(id: string) {
  const resposta = await endpoint.get(`/colaboradores/${id}`);
  return resposta;
}

