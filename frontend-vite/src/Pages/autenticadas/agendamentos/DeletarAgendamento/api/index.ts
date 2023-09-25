import { endpoint } from "../../../../../services/endpoint";

export async function deletarAgendamentoPorId(id: string) {
  const resposta = await endpoint.delete(`/agendamentos/${id}`);
  return resposta;
}
