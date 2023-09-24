import { endpoint } from "../../../../../services/endpoint";

import { Agendamento } from "../../../../../types/agendamento/Agendamento";

export async function adicionarUmAgendamento(agendamento: Agendamento) {
  const resposta = await endpoint.post(`/agendamentos`, agendamento);
  return resposta;
}
