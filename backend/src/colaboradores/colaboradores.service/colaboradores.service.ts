import { Injectable, NotFoundException } from '@nestjs/common';

import { UsuariosRepositoriesInterface } from 'src/usuarios/interfaces/UsuariosRepositoriesInterface';
import { ColaboradorUsuarioDto } from '../colaboradores.dto/ColaboradorUsuarioDto';
import { ColaboradorCriadoDto } from '../colaboradores.dto/ColaboradorCriadoDto';
import { ColaboradorPesquisadoDto } from '../colaboradores.dto/ColaboradorPesquisadoDto';

import { ColaboradoresRepositoriesInterface } from '../interfaces/ColaboradoresRepositoriesInterface';

@Injectable()
export class ColaboradoresService {
  constructor(
    private readonly colaboradoresRepositories: ColaboradoresRepositoriesInterface,
    private readonly usuariosRepositories: UsuariosRepositoriesInterface,
  ) {}

  async validarNaoExisteId(id: string) {
    const existeId = await this.colaboradoresRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe no sistema');
    }
  }
  async validarNaoExisteUsuariosIdEmUsuario(usuariosId: string) {
    const existeId = await this.usuariosRepositories.buscarUmPorId(usuariosId);
    if (!existeId) {
      throw new NotFoundException('Esse id usuario não existe no sistema');
    }
  }

  async criarUm(colaborador: ColaboradorCriadoDto) {
    await this.validarNaoExisteUsuariosIdEmUsuario(colaborador?.usuariosId);
    return await this.colaboradoresRepositories.salvar(colaborador);
  }

  async deletarUmPorId(id: string) {
    await this.validarNaoExisteId(id);
    const deletado = await this.buscarUmPorId(id);
    await this.colaboradoresRepositories.deletarUmPorId(id);
    return await this.usuariosRepositories.deletarUmPorId(deletado.usuarios.id);
  }

  async editarUmPorId(id: string, Colaborador: ColaboradorCriadoDto) {
    await this.validarNaoExisteId(id);
    return await this.colaboradoresRepositories.editarUmPorId(id, Colaborador);
  }

  async editarUsuarioEColaboradorUmPorIdColaborador(
    idColaborador: string,
    ColaboradorEUsuario: ColaboradorUsuarioDto,
  ) {
    const {
      nome_completo,
      isAtivado,
      telefone,
      login,
      email,
      usuariosId,
      especialidade_colaboradorId,
    } = ColaboradorEUsuario;

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

    await this.usuariosRepositories.editarUmPorId(usuariosId!, usuario);
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
