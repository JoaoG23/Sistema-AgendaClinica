import { Injectable } from '@nestjs/common';

import { AgendamentoCriadoDto } from '../agendamentos.dto/AgendamentoCriadoDto';
import { AgendamentoPesquisadoDto } from '../agendamentos.dto/AgendamentoPesquisadoDto';
import { AgendamentoAtualizadoHorariosDto } from '../agendamentos.dto/AgendamentoAtualizadoHorariosDto';

import { AgendamentosRepositoriesInterface } from '../interfaces/AgendamentosRepositoriesInterface';
import { ValidacaoAgendamentosServicesInterface } from '../interfaces/ValidacaoAgendamentosServicesInterface';

@Injectable()
export class AgendamentosService {
  constructor(
    private readonly agendamentosRepositories: AgendamentosRepositoriesInterface,
    private readonly validacaoAgendamentosServices: ValidacaoAgendamentosServicesInterface,
  ) {}

  async criarUm(agendamento: AgendamentoCriadoDto) {
    const { dataHoraInicio, dataHoraFim } = agendamento;

    await this.validacaoAgendamentosServices.verificarSeDataInicialMenorIgualQueFinal(
      dataHoraInicio,
      dataHoraFim,
    );
    await this.validacaoAgendamentosServices.verificarSeExisteAgendamentoNesteHorario(
      agendamento,
    );

    return await this.agendamentosRepositories.salvar(agendamento);
  }

  async deletarUmPorId(id: string) {
    await this.validacaoAgendamentosServices.verificarNaoExisteId(id);
    return await this.agendamentosRepositories.deletarUmPorId(id);
  }

  async editarUmPorId(id: string, agendamento: AgendamentoCriadoDto) {
    const { dataHoraInicio, dataHoraFim } = agendamento;

    await this.validacaoAgendamentosServices.verificarNaoExisteId(id);
    await this.validacaoAgendamentosServices.verificarSeDataInicialMenorIgualQueFinal(
      dataHoraInicio,
      dataHoraFim,
    );
    await this.validacaoAgendamentosServices.verificarSeExisteAgendamentoNesteHorario(
      agendamento,
    );

    return await this.agendamentosRepositories.editarUmPorId(id, agendamento);
  }

  async alterarHorariosDeUmPorId(
    id: string,
    agendamento: AgendamentoAtualizadoHorariosDto,
  ) {
    const { dataHoraInicio, dataHoraFim } = agendamento;

    await this.validacaoAgendamentosServices.verificarNaoExisteId(id);
    await this.validacaoAgendamentosServices.verificarSeDataInicialMenorIgualQueFinal(
      dataHoraInicio,
      dataHoraFim,
    );

    return await this.agendamentosRepositories.editarUmPorId(id, agendamento);
  }

  async buscarUmPorId(id: string) {
    return await this.agendamentosRepositories.buscarUmPorId(id);
  }
  async buscarTodos() {
    return await this.agendamentosRepositories.buscarTodos();
  }

  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    return await this.agendamentosRepositories.buscarTodosPorPagina(
      numeroPagina,
      quantidadeItemsPagina,
    );
  }

  async pesquisarTodosPorCriteriosEPagina(criterios: AgendamentoPesquisadoDto) {
    const { dataHoraPesquisada, ...criteriosSemDataHoraPesquisa } = criterios;

    if (dataHoraPesquisada) {
      return await this.agendamentosRepositories.pesquisarTodosPorCriteriosComDataEPagincao(
        criterios,
      );
    }

    return await this.agendamentosRepositories.pesquisarTodosPorCriteriosEPagincao(
      criteriosSemDataHoraPesquisa,
    );
  }
}
