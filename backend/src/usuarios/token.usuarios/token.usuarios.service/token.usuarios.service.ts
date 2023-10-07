import * as moment from 'moment';

import { ConflictException, Injectable } from '@nestjs/common';

import { TokenUsuariosRepositoriesInterface } from '../interfaces/TokenUsuariosRepositoriesInterface';

import { TokenValidadoDto } from '../token.usuarios.dto/TokenValidadoDto';

import { UsuariosRepositoriesInterface } from 'src/usuarios/usuarios/interfaces/UsuariosRepositoriesInterface';
import { gerarToken } from 'src/utils/tokens/gerarToken/gerarToken';

@Injectable()
export class TokenUsuariosService {
  constructor(
    private readonly tokenUsuariosRepositories: TokenUsuariosRepositoriesInterface,
    private readonly usuariosRepositories: UsuariosRepositoriesInterface,
  ) {}

  async verificarSeTokenExiste(token: string) {
    const isTokenExiste =
      await this.tokenUsuariosRepositories.buscarUmPorTokenAtivado(token);

    if (!isTokenExiste) {
      throw new ConflictException('Este token está inválido!');
    }
  }
  async verificarSeEmailExiste(email: string) {
    const isEmailExiste = await this.tokenUsuariosRepositories.buscarUmPorEmail(
      email,
    );

    if (!isEmailExiste) {
      throw new ConflictException(
        'Este e-mail não existe! Registre-se primeiro no sistema',
      );
    }
  }

  async verificarSeTokenEstaVencido(token: string) {
    const tokenRetornado =
      await this.tokenUsuariosRepositories.buscarUmPorToken(token);

    const isTokenEstaVencido = moment().isAfter(tokenRetornado?.validade_token);

    if (isTokenEstaVencido) {
      throw new ConflictException('Este token já está vencido! Tente outro');
    }
  }

  async invalidarToken(id: number) {
    await this.tokenUsuariosRepositories.editarUmPorId(id, {
      isAtivado: false,
    });
  }

  async ativarUsuarioPorId(usuarioId: string) {
    return await this.usuariosRepositories.editarUmPorId(usuarioId, {
      isAtivado: true,
    });
  }

  async validarToken(tokenValidado: TokenValidadoDto): Promise<string> {
    await this.verificarSeTokenExiste(tokenValidado.token);
    await this.verificarSeTokenEstaVencido(tokenValidado.token);

    const tokenDados = await this.tokenUsuariosRepositories.buscarUmPorToken(
      tokenValidado.token,
    );

    await this.invalidarToken(tokenDados?.id);

    await this.ativarUsuarioPorId(tokenDados?.usuariosId);
    return 'Token validado com sucesso! Por gentileza, vá a página de login e efetue o seu primeiro login';
  }

  async reenviarToken(email: string) {
    await this.verificarSeEmailExiste(email);
    const usuario = await this.tokenUsuariosRepositories.buscarUmPorEmail(
      email,
    );
    const { token, validadeToken } = gerarToken();

    await this.tokenUsuariosRepositories.salvar({
      token: token,
      validade_token: new Date(validadeToken as any),
      usuariosId: usuario?.usuarios?.id,
    });

    return 'Token reenviado com sucesso! Check seu email por favor';
  }
}
