import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { CriarTokenDto } from '../token.usuarios.dto/TokenCriadoDto';
import { TokenUsuariosRepositoriesInterface } from '../interfaces/TokenUsuariosRepositoriesInterface';
import { TokenEditadoDto } from '../token.usuarios.dto/TokenEditadoDto';

@Injectable()
export class TokenUsuariosRepositories
  implements TokenUsuariosRepositoriesInterface
{
  constructor(private readonly prismaService: PrismaService) {}

  buscarTodos() {
    throw new Error('Method not implemented.');
  }
  async buscarUmPorEmail(email: string) {
    return await this.prismaService.gestao_token_usuarios.findFirst({
      include: {
        usuarios: true,
      },
      where: {
        usuarios: {
          email: email,
        },
      },
    });
  }

  async buscarUmPorToken(token: string) {
    return await this.prismaService.gestao_token_usuarios.findFirst({
      where: { token },
    });
  }

  async buscarUmPorTokenAtivado(token: string) {
    return await this.prismaService.gestao_token_usuarios.findFirst({
      where: { token, isAtivado: true },
    });
  }

  async salvar(tokenCriado: CriarTokenDto) {
    return await this.prismaService.gestao_token_usuarios.create({
      data: tokenCriado,
    });
  }

  async editarUmPorId(id: number, token: TokenEditadoDto) {
    return await this.prismaService.gestao_token_usuarios.update({
      where: { id },
      data: token,
    });
  }
}
