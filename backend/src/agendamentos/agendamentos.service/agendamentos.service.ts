import { Injectable, NotFoundException } from '@nestjs/common';

import { AgendamentoCriadoDto } from '../agendamentos.dto/AgendamentoCriadoDto';
import { AgendamentoPesquisadoDto } from '../agendamentos.dto/AgendamentoPesquisadoDto';

import { AgendamentosRepositoriesInterface } from '../interfaces/AgendamentosRepositoriesInterface';

@Injectable()
export class AgendamentosService {
  constructor(
    private readonly agendamentosRepositories: AgendamentosRepositoriesInterface,
  ) {}

  async validarNaoExisteId(id: string) {
    const existeId = await this.agendamentosRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe no sistema');
    }
  }

  async criarUm(agendamento: AgendamentoCriadoDto) {
    return await this.agendamentosRepositories.salvar(agendamento);
  }

  async deletarUmPorId(id: string) {
    await this.validarNaoExisteId(id);
    return await this.agendamentosRepositories.deletarUmPorId(id);
  }

  async editarUmPorId(id: string, agendamento: AgendamentoCriadoDto) {
    await this.validarNaoExisteId(id);
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
