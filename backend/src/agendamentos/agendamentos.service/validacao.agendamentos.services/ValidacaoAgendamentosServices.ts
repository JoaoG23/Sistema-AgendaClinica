import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { AgendamentosRepositoriesInterface } from 'src/agendamentos/interfaces/AgendamentosRepositoriesInterface';
import { ValidacaoAgendamentosServicesInterface } from 'src/agendamentos/interfaces/ValidacaoAgendamentosServicesInterface';
import { AgendamentoFiltrado } from 'src/agendamentos/types/AgendamentoFiltrado';

@Injectable()
export class ValidacaoAgendamentosService
  implements ValidacaoAgendamentosServicesInterface
{
  constructor(
    private readonly agendamentosRepositories: AgendamentosRepositoriesInterface,
  ) {}

  async verificarNaoExisteId(id: string) {
    const existeId = await this.agendamentosRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe no sistema');
    }
  }
  async verificarSeDataInicialMenorIgualQueFinal(
    inicialDatahora: Date,
    finalDatahora: Date,
  ) {
    const isHorarioInicialMaiorQueFinal =
      new Date(inicialDatahora) >= new Date(finalDatahora);

    if (isHorarioInicialMaiorQueFinal) {
      throw new ConflictException('Data de inicio é maior data final');
    }
  }
  async verificarSeExisteAgendamentoNesteHorario(
    agendamento: AgendamentoFiltrado,
  ) {
    const agendamentos =
      await this.agendamentosRepositories.buscarAgendamentosPorFiltro(
        agendamento,
      );
    console.log(
      '🚀 ~ file: ValidacaoAgendamentosServices.ts:40 ~ existeAgendamentos:',
      agendamentos,
    );
    const isExisteAgendamentos = agendamentos?.length;
    if (isExisteAgendamentos) {
      throw new NotFoundException(
        'Não pode realizar dois agendamentos no mesmo horário',
      );
    }
  }
}
