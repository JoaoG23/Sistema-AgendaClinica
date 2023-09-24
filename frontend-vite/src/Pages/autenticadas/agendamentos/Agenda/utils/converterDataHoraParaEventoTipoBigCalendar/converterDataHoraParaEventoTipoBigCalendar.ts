import { Agendamento } from "../../../../../../types/agendamento/Agendamento";

import { separaDadosDataHora } from "./utils/separaDadosDataHora";

/*

@Autor Joao Guilherme
converte dataHora dos dados
vindo do Agendamento backend
para eventos do calendario
bigCalendar

*/

export function converterDataHoraParaEventoTipoBigCalendar(
  evento: Agendamento
) {
  const inicio = new Date(evento?.dataHoraInicio!);
  const fim = new Date(evento?.dataHoraFim!);

  const {
    dia: inicialDia,
    mes: inicialMes,
    ano: inicialAno,
    hora: inicialHora,
    minuto: inicialMinuto,
  } = separaDadosDataHora(inicio);

  const {
    dia: finalDia,
    mes: finalMes,
    ano: finalAno,
    hora: finalHora,
    minuto: finalMinuto,
  } = separaDadosDataHora(fim);

  const horarioInicial = new Date(
    inicialAno,
    inicialMes,
    inicialDia,
    inicialHora,
    inicialMinuto,
    0
  );
  const horarioFinal = new Date(
    finalAno,
    finalMes,
    finalDia,
    finalHora,
    finalMinuto,
    0
  );

  const eventoConvetido = {
    id: evento?.id!,
    title: `${evento?.clientes?.nome_completo || ""} - ${
      evento?.colaboradores?.nome_completo || ""
    }`,
    start: horarioInicial,
    end: horarioFinal,
  };

  return eventoConvetido;
}
