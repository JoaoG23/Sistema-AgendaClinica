import { endpoint } from "../../../../../services/endpoint";

export async function buscarAgendamentosPorId(id: string) {
  const resposta = await endpoint.get(`/agendamentos/${id}`);
  return resposta;
}

export async function editarAgendamentoPorId(
  id: string,
  agendamento: any
) {
  const resposta = await endpoint.put(`/agendamentos/${id}`, agendamento);
  return resposta;
}
