import { atualizarHorariosUmAgendamento } from "../..";

import { Agendamento } from "../../../../../../../../types/agendamento/Agendamento";

export async function requestAtualizaHorario(id: string, body: Agendamento) {
  const sucesso = await atualizarHorariosUmAgendamento(id, body);
  const sucessoData = sucesso.data;
  return sucessoData;
}
