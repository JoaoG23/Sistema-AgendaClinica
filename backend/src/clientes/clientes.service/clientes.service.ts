import { Injectable, NotFoundException } from '@nestjs/common';

import { ClientesRepositoriesInterface } from '../interfaces/ClientesRepositoriesInterface';

import { ClienteCriadoDto } from '../clientes.dto/ClienteCriadoDto';
import { ClientePesquisadoDto } from '../clientes.dto/ClientePesquisadoDto';
import { ClienteUsuarioCriadoDto } from '../clientes.dto/ClienteUsuarioCriadoDto';
import { ClienteUsuarioEditadoDto } from '../clientes.dto/ClienteUsuarioEditadoDto';

import { UsuariosServiceInterface } from 'src/usuarios/usuarios/interfaces/UsuarioServiceInterface';

@Injectable()
export class ClientesService {
  constructor(
    private readonly clientesRepositories: ClientesRepositoriesInterface,
    private readonly usuariosServices: UsuariosServiceInterface,
  ) {}

  async validarNaoExisteId(id: string) {
    const existeId = await this.clientesRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe no sistema');
    }
  }

  async criarUm(clienteEUsuarioCriado: ClienteUsuarioCriadoDto) {
    const { nome_completo, isAtivado, telefone, login, email, senha } =
      clienteEUsuarioCriado;

    const cliente = {
      nome_completo,
      isAtivado,
    };

    const usuario = {
      telefone,
      login,
      email,
      senha,
      isAtivado: false,
    };

    const usuariosCriado = await this.usuariosServices.criarUm(usuario);
    const clienteAcrescidoUsuariosId = {
      ...cliente,
      usuariosId: usuariosCriado?.id,
    };
    return await this.clientesRepositories.salvar(clienteAcrescidoUsuariosId);
  }

  async deletarUmPorId(id: string) {
    await this.validarNaoExisteId(id);
    const deletado = await this.buscarUmPorId(id);
    await this.clientesRepositories.deletarUmPorId(id);
    return await this.usuariosServices.deletarUmPorId(deletado.usuarios.id);
  }

  async editarUmPorId(id: string, cliente: ClienteCriadoDto) {
    await this.validarNaoExisteId(id);
    return await this.clientesRepositories.editarUmPorId(id, cliente);
  }

  async editarUsuarioEClienteUmPorIdCliente(
    idCliente: string,
    clienteEUsuarioEditado: ClienteUsuarioEditadoDto,
  ) {
    const { nome_completo, isAtivado, telefone, login, email, usuariosId } =
      clienteEUsuarioEditado;

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

    await this.usuariosServices.editarUmPorId(usuariosId!, usuario);
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
