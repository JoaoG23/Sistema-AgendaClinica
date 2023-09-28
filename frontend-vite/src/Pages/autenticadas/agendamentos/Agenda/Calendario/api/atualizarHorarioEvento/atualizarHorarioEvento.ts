// Service
import { requestAtualizaHorario } from "./requestAtualizaHorario/requestAtualizaHorario";

type Props = {
  id: string;
  start: Date;
  end: Date;
};

export async function atualizarHorarioEvento(dados: Props) {
  const { id, start, end } = dados;

  const horarioInicial = start.toLocaleTimeString('pt-BR')
  const horarioFinal = end.toLocaleTimeString('pt-BR')

  const dataInicialISO = start.toISOString()
  const dataInicial = dataInicialISO.slice(0, 10)

  const dataFinalISO = end.toISOString()
  const dataFinal = dataFinalISO.slice(0, 10)

  const horarioConvertidoParaAgendamento = {
    dataHoraInicio: `${dataInicial}T${horarioInicial}.000Z`,
    dataHoraFim: `${dataFinal}T${horarioFinal}.000Z`,
  };

  await requestAtualizaHorario(id, horarioConvertidoParaAgendamento as any);
}
