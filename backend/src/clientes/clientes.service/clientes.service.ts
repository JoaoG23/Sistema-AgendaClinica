import { Injectable, NotFoundException } from '@nestjs/common';

import { UsuariosRepositoriesInterface } from 'src/usuarios/interfaces/UsuariosRepositoriesInterface';
import { ClientesRepositoriesInterface } from '../interfaces/ClientesRepositoriesInterface';

import { ClienteCriadoDto } from '../clientes.dto/ClienteCriadoDto';
import { ClienteUsuarioDto } from '../clientes.dto/ClienteUsuarioDto';
import { ClientePesquisadoDto } from '../clientes.dto/ClientePesquisadoDto';

@Injectable()
export class ClientesService {
  constructor(
    private readonly clientesRepositories: ClientesRepositoriesInterface,
    private readonly usuariosRepositories: UsuariosRepositoriesInterface,
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
    const deletado = await this.buscarUmPorId(id);
    await this.clientesRepositories.deletarUmPorId(id);
    return await this.usuariosRepositories.deletarUmPorId(deletado.usuarios.id);
  }

  async editarUmPorId(id: string, cliente: ClienteCriadoDto) {
    await this.validarNaoExisteId(id);
    return await this.clientesRepositories.editarUmPorId(id, cliente);
  }

  async editarUsuarioEClienteUmPorIdCliente(
    idCliente: string,
    clienteEUsuario: ClienteUsuarioDto,
  ) {
    const { nome_completo, isAtivado, telefone, login, email, usuariosId } =
      clienteEUsuario;

    const cliente = {
      nome_completo,
      isAtivado,
      usuariosId,
    };

    const usuario = {
      telefone,
      login,
      email,
    };

    await this.validarNaoExisteId(idCliente);

    await this.usuariosRepositories.editarUmPorId(usuariosId!, usuario);
    return await this.clientesRepositories.editarUmPorId(idCliente, cliente);
  }

  async buscarUmPorId(id: string) {
    return await this.clientesRepositories.buscarUmPorId(id);
  }

  async buscarTodos() {
    return await this.clientesRepositories.buscarTodos();
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
