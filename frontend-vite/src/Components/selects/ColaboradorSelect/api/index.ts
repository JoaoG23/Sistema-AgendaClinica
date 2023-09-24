import { endpoint } from "../../../../services/endpoint";

export async function buscarTodosColaboradores() {
  const resposta = await endpoint.get(`/colaboradores`);
  return resposta;
}
