import * as moment from 'moment';
import { uid } from 'rand-token';
import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { CriarUsuariosDto } from '../usuarios.dto/CriarUsuarioDto';

import { UsuariosRepositoriesInterface } from '../interfaces/UsuariosRepositoriesInterface';

import { UsuariosServiceInterface } from '../interfaces/UsuarioServiceInterface';
import { EditarUsuariosDto } from '../usuarios.dto/EditarUsuarioDto';
import { TokenUsuariosRepositoriesInterface } from 'src/usuarios/token.usuarios/interfaces/TokenUsuariosRepositoriesInterface';
import { gerarToken } from 'src/utils/tokens/gerarToken/gerarToken';

@Injectable()
export class UsuariosService implements UsuariosServiceInterface {
  constructor(
    private readonly usuariosRepositories: UsuariosRepositoriesInterface,
    private readonly tokenUsuarioRepositories: TokenUsuariosRepositoriesInterface,
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

    // await this.validarSeExisteLogin(login);
    // await this.validarSeExisteEmail(email);
    // await this.validarSeExisteTelefone(telefone);

    const usuarioCriado = await this.usuariosRepositories.salvar({
      ...usuario,
      isAtivado: false,
    });

    // 1.Retorna o seu usuário será cadastrado apos email

    // 2. Criar token

    const { token, validadeToken } = gerarToken();
    // 3. Enviar Token via email para usuário ou whatapp

    await this.tokenUsuarioRepositories.salvar({
      token: token,
      validade_token: new Date(validadeToken as any),
      usuariosId: usuarioCriado.id,
    });

    return usuarioCriado;

    // 4. Abrir tela de validação e ativacao de token
  }
  async editarUmPorId(id: string, usuario: EditarUsuariosDto) {
    const { login, email, telefone } = usuario;

    // await this.validarSeExisteLogin(login);
    // await this.validarSeExisteEmail(email);
    // await this.validarSeExisteTelefone(telefone);
    return await this.usuariosRepositories.editarUmPorId(id, usuario);
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
