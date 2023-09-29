import { Injectable, NotFoundException } from '@nestjs/common';

import { ColaboradorUsuarioCriadoDto } from '../colaboradores.dto/ColaboradorUsuarioCriadoDto';
import { ColaboradorCriadoDto } from '../colaboradores.dto/ColaboradorCriadoDto';
import { ColaboradorPesquisadoDto } from '../colaboradores.dto/ColaboradorPesquisadoDto';

import { ColaboradoresRepositoriesInterface } from '../interfaces/ColaboradoresRepositoriesInterface';
import { ColaboradorUsuarioEditadoDto } from '../colaboradores.dto/ColaboradorUsuarioEditadoDto';

import { UsuariosServiceInterface } from 'src/usuarios/usuarios/interfaces/UsuarioServiceInterface';

@Injectable()
export class ColaboradoresService {
  constructor(
    private readonly colaboradoresRepositories: ColaboradoresRepositoriesInterface,
    private readonly usuariosServices: UsuariosServiceInterface,
  ) {}

  async validarNaoExisteId(id: string) {
    const existeId = await this.colaboradoresRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe no sistema');
    }
  }

  async criarUm(colaboradorUsuarioCriado: ColaboradorUsuarioCriadoDto) {
    const {
      nome_completo,
      isAtivado,
      telefone,
      login,
      email,
      senha,
      especialidade_colaboradorId,
    } = colaboradorUsuarioCriado;

    const usuario = {
      telefone,
      login,
      email,
      isAtivado: false,
      senha,
    };

    const usuariosCriado = await this.usuariosServices.criarUm(usuario);
    const colaboradorAcrescidoUsuariosId = {
      nome_completo,
      isAtivado,
      especialidade_colaboradorId,
      usuariosId: usuariosCriado?.id,
    };

    return await this.colaboradoresRepositories.salvar(
      colaboradorAcrescidoUsuariosId,
    );
  }

  async deletarUmPorId(id: string) {
    await this.validarNaoExisteId(id);
    const deletado = await this.buscarUmPorId(id);
    await this.colaboradoresRepositories.deletarUmPorId(id);
    return await this.usuariosServices.deletarUmPorId(deletado.usuarios.id);
  }

  async editarUmPorId(id: string, colaborador: ColaboradorCriadoDto) {
    await this.validarNaoExisteId(id);
    return await this.colaboradoresRepositories.editarUmPorId(id, colaborador);
  }

  async editarUsuarioEColaboradorUmPorIdColaborador(
    idColaborador: string,
    ColaboradorEUsuarioEditado: ColaboradorUsuarioEditadoDto,
  ) {
    const {
      nome_completo,
      isAtivado,
      telefone,
      login,
      email,
      usuariosId,
      especialidade_colaboradorId,
    } = ColaboradorEUsuarioEditado;

    const colaborador = {
      nome_completo,
      isAtivado,
      especialidade_colaboradorId,
      usuariosId,
    };

    const usuario = {
      telefone,
      login,
      email,
    };

    await this.usuariosServices.editarUmPorId(usuariosId!, usuario);
    return await this.colaboradoresRepositories.editarUmPorId(
      idColaborador,
      colaborador,
    );
  }

  async buscarUmPorId(id: string) {
    return await this.colaboradoresRepositories.buscarUmPorId(id);
  }

  async buscarTodos() {
    return await this.colaboradoresRepositories.buscarTodos();
  }

  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    return await this.colaboradoresRepositories.buscarTodosPorPagina(
      numeroPagina,
      quantidadeItemsPagina,
    );
  }

  async pesquisarTodosPorCriteriosEPagina(criterios: ColaboradorPesquisadoDto) {
    return await this.colaboradoresRepositories.pesquisarTodosPorCriteriosEPagincao(
      criterios,
    );
  }
}
