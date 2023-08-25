import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { CriarUsuariosDto } from '../usuarios.dto/CriarUsuarioDto';

import { UsuariosRepositoriesInterface } from '../interfaces/UsuariosRepositoriesInterface';

@Injectable()
export class UsuariosService {
  constructor(
    private readonly usuariosRepositories: UsuariosRepositoriesInterface,
  ) {}

  async validarSeExisteLogin(login: string) {
    const existeLogin = await this.usuariosRepositories.buscarUmPorLogin(login);
    if (existeLogin) {
      throw new ConflictException('Esse login já existe');
    }
  }
  async validarSeExisteTelefone(telefone: string) {
    const existeTelefone = await this.usuariosRepositories.buscarUmPorTelefone(
      telefone,
    );
    if (existeTelefone) {
      throw new ConflictException('Esse telefone já existe');
    }
  }
  async validarSeExisteEmail(email: string) {
    const existeEmail = await this.usuariosRepositories.buscarUmPorEmail(email);
    if (existeEmail) {
      throw new ConflictException('Esse email já existe');
    }
  }
  async validarNaoExisteId(id: string) {
    const existeId = await this.usuariosRepositories.buscarUmPorId(id);
    if (!existeId) {
      throw new NotFoundException('Esse id não existe no sistema');
    }
  }

  async criarUm(usuario: CriarUsuariosDto) {
    const { login, email, telefone } = usuario;

    await this.validarSeExisteLogin(login);
    await this.validarSeExisteEmail(email);
    await this.validarSeExisteTelefone(telefone);
    return await this.usuariosRepositories.salvar(usuario);
  }

  async deletarUmPorId(id: string) {
    await this.validarNaoExisteId(id);
    return await this.usuariosRepositories.deletarUmPorId(id);
  }

  async buscarUmPorLogin(login: string) {
    return await this.usuariosRepositories.buscarUmPorLogin(login);
  }
  async buscarUmPorId(id: string) {
    return await this.usuariosRepositories.buscarUmPorId(id);
  }
  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    return await this.usuariosRepositories.buscarTodosPorPagina(
      numeroPagina,
      quantidadeItemsPagina,
    );
  }
}
