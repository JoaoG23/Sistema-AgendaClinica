import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { CriarUsuariosDto } from '../usuarios.dto/CriarUsuarioDto';
import { EditarUsuariosDto } from '../usuarios.dto/EditarUsuarioDto';

import { UsuariosRepositoriesInterface } from '../interfaces/UsuariosRepositoriesInterface';

import { calcularQuantidadePaginas } from 'src/utils/paginacao/calcularQuantidadePaginas/calcularQuantidadePaginas';
import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';
@Injectable()
export class UsuariosRepositories implements UsuariosRepositoriesInterface {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly criptografia: CriptografiaBcryptInterface,
  ) {}

  async buscarUmPorTelefone(telefone: string) {
    return await this.prismaService.usuarios.findFirst({
      where: { telefone },
    });
  }
  async buscarUmPorEmail(email: string) {
    return await this.prismaService.usuarios.findFirst({
      where: { email },
    });
  }
  async contarTodosPorCriterio() {
    return await this.prismaService.usuarios.count({});
  }

  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  ) {
    const quantidadeTotalRegistros = await this.contarTodosPorCriterio();
    const itemsPorPagina = Number(quantidadeItemsPagina);

    const totalQuantidadePaginas = await calcularQuantidadePaginas(
      itemsPorPagina,
      quantidadeTotalRegistros,
    );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const itemsPagina = await this.prismaService.usuarios.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarUmPorId(id: string) {
    return await this.prismaService.usuarios.findFirst({
      where: { id },
    });
  }

  async buscarUmPorLogin(login: string) {
    return await this.prismaService.usuarios.findFirst({
      where: { login },
    });
  }

  async deletarUmPorId(id: string) {
    return await this.prismaService.usuarios.delete({
      where: { id },
    });
  }

  async salvar(usuario: CriarUsuariosDto) {
    const usuarioComSenhaCriptografada = {
      ...usuario,
      senha: await this.criptografia.criptografarSenha(usuario.senha),
    };

    return await this.prismaService.usuarios.create({
      data: usuarioComSenhaCriptografada,
    });
  }

  async editarUmPorId(id: string, usuario: EditarUsuariosDto) {
    return await this.prismaService.usuarios.update({
      where: { id },
      data: usuario,
    });
  }
}
