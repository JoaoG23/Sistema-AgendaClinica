import { endpoint } from "../../../../../services/endpoint";

export async function adicionarUmAgendamento(agendamento: any) {
  const resposta = await endpoint.put(`/agendamentos`);
  return resposta;
}
