import { endpoint } from "../../../../../../services/endpoint";

export async function buscarTodosAgendamentos() {
  const resposta = await endpoint.get(`/agendamentos`);
  return resposta;
}

export async function atualizarHorariosUmAgendamento<T = unknown>(
  id: string | number,
  dataHorarioInicialEFim: T
) {
  const resposta = await endpoint.patch(
    `/agendamentos/${id}`,
    dataHorarioInicialEFim
  );
  return resposta;
}
