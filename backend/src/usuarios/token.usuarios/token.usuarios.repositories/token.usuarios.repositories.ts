import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { CriarTokenDto } from '../token.usuarios.dto/CriarTokenDto';

@Injectable()
export class TokenUsuariosRepositories implements TokenUsuariosRepositories {
  constructor(private readonly prismaService: PrismaService) {}

  async buscarUmPorTelefone(telefone: string) {
    return await this.prismaService.usuarios.findFirst({
      where: { telefone },
    });
  }

  async salvar(usuario: CriarTokenDto) {
    // const usuarioComSenhaCriptografada = {
    //   ...usuario,
    //   senha: await this.criptografia.criptografarSenha(usuario.senha),
    // };
    // return await this.prismaService.usuarios.create({
    //   data: usuarioComSenhaCriptografada,
    // });
  }
}
