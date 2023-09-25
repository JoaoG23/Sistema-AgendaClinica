import { endpoint } from "../../../../../services/endpoint";

export async function buscarAgendamentosPorId(id: string) {
  const resposta = await endpoint.get(`/agendamentos/${id}`);
  return resposta;
}

