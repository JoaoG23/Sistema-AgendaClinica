import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsuariosService } from 'src/usuarios/usuarios/usuarios.service/usuarios.service';

import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usuariosService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validarNaoExisteLogin(login) {
    const existeLogin = await this.usuariosService.buscarUmPorLogin(login);
    if (!existeLogin) {
      throw new UnauthorizedException('Usuário ou senha estão incorretas');
    }
  }

  async validarLogin(login, senhaValidada) {
    const criptografia = new CriptografiaBcrypt();

    await this.validarNaoExisteLogin(login);

    const usuario = await this.usuariosService.buscarUmPorLogin(login);
    const isHashBancoESenhaDigitadaCorreta: boolean =
      await criptografia.verificarSenhasCombinam(senhaValidada, usuario.senha);

    if (!isHashBancoESenhaDigitadaCorreta) {
      throw new UnauthorizedException('Usuário ou senha estão incorretas');
    }
    if (!usuario?.isAtivado) {
      throw new UnauthorizedException(
        'Usuário ainda não foi ativado! Tente ativar-lo via token enviado no e-mail',
      );
    }
    const payload = { sub: usuario.id, nome: usuario.nome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
