import { Injectable } from '@nestjs/common';
import { AgendamentoFiltrado } from '../types/AgendamentoFiltrado';

@Injectable()
export abstract class ValidacaoAgendamentosServicesInterface {
  abstract verificarNaoExisteId(id: string);
  abstract verificarSeDataInicialMenorIgualQueFinal(
    inicialDatahora: Date,
    finalDatahora: Date,
  );
  abstract verificarSeExisteAgendamentoNesteHorario(
    agendamento: AgendamentoFiltrado,
  );
}
