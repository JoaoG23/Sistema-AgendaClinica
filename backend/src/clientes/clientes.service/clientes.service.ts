import { Injectable, NotFoundException } from '@nestjs/common';

import { ClientesRepositoriesInterface } from '../interfaces/ClientesRepositoriesInterface';
import { ClienteCriadoDto } from '../clientes.dto/ClienteCriadoDto';
import { ClientePesquisadoDto } from '../clientes.dto/ClientePesquisadoDto';

@Injectable()
export class ClientesService {
  constructor(
    private readonly clientesRepositories: ClientesRepositoriesInterface,
  ) {}

  async validarNaoExisteId(id: string) {
    const existeId = await this.clientesRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe no sistema');
    }
  }

  async criarUm(cliente: ClienteCriadoDto) {
    return await this.clientesRepositories.salvar(cliente);
  }

  async deletarUmPorId(id: string) {
    await this.validarNaoExisteId(id);
    return await this.clientesRepositories.deletarUmPorId(id);
  }

  async editarUmPorId(id: string, cliente: ClienteCriadoDto) {
    await this.validarNaoExisteId(id);
    return await this.clientesRepositories.editarUmPorId(id, cliente);
  }

  async buscarUmPorId(id: string) {
    return await this.clientesRepositories.buscarUmPorId(id);
  }

  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    return await this.clientesRepositories.buscarTodosPorPagina(
      numeroPagina,
      quantidadeItemsPagina,
    );
  }

  async pesquisarTodosPorCriteriosEPagina(criterios: ClientePesquisadoDto) {
    return await this.clientesRepositories.pesquisarTodosPorCriteriosEPagincao(
      criterios,
    );
  }
}
