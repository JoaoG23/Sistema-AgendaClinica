// Service
import { requestAtualizaHorario } from "./requestAtualizaHorario/requestAtualizaHorario";

type Props = {
  id: string;
  start: Date;
  end: Date;
};

export async function atualizarHorarioEvento(dados: Props) {
  const { id, start, end } = dados;

  const horarioConvertidoParaAgendamento = {
    dataHoraInicio: start,
    dataHoraFim: end,
  };

  await requestAtualizaHorario(id, horarioConvertidoParaAgendamento as any);
}
