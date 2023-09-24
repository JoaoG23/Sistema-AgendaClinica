import { Agendamento } from "../../../../../types/agendamento/Agendamento";
import { EventoBigCalendar } from "../../../../../types/agendamento/EventoBigCalendar";

import { converterDataHoraParaEventoTipoBigCalendar } from "../converterDataHoraParaEventoTipoBigCalendar/converterDataHoraParaEventoTipoBigCalendar";

export function retornaArrayEventosConvertido(
  agendamentos: Agendamento[],
  arrayConvertido: EventoBigCalendar[]
) {
  agendamentos?.forEach((evento: Agendamento) => {
    const novoEvento = converterDataHoraParaEventoTipoBigCalendar(evento);
    arrayConvertido.push(novoEvento!);
  });

  return arrayConvertido;
}
