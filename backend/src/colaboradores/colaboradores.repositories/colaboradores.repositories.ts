import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { ColaboradoresRepositoriesInterface } from '../interfaces/ColaboradoresRepositoriesInterface';

import { calcularQuantidadePaginas } from 'src/utils/paginacao/calcularQuantidadePaginas/calcularQuantidadePaginas';

import { ColaboradorPesquisadoDto } from '../colaboradores.dto/ColaboradorPesquisadoDto';
import { ColaboradorCriadoDto } from '../colaboradores.dto/ColaboradorCriadoDto';

@Injectable()
export class ColaboradoresRepositories
  implements ColaboradoresRepositoriesInterface
{
  constructor(private readonly prismaService: PrismaService) {}

  async buscarTodos() {
    return await this.prismaService.colaboradores.findMany({});
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

    const itemsPagina = await this.prismaService.colaboradores.findMany({
      select: {
        id: true,
        nome_completo: true,
        isAtivado: true,
        usuarios: {
          select: { login: true, telefone: true, email: true },
        },
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async contarTodosPorCriterio() {
    return await this.prismaService.colaboradores.count({});
  }

  async pesquisarTodosPorCriteriosEPagincao(
    criterios: ColaboradorPesquisadoDto,
  ) {
    const { quantidadeItemsPagina, numeroPagina, ...criteriosPesquisa } =
      criterios;

    const { nome_completo, email } = criteriosPesquisa;

    const itemsPesquisados = {
      nome_completo: { contains: nome_completo },
      usuarios: {
        email: {
          contains: email,
        },
      },
    };

    const quantidadeTotalRegistros =
      await this.prismaService.colaboradores.count({
        where: itemsPesquisados,
      });
    const itemsPorPagina = Number(quantidadeItemsPagina);
    const totalQuantidadePaginas = await calcularQuantidadePaginas(
      itemsPorPagina,
      quantidadeTotalRegistros,
    );
    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const itemsPagina = await this.prismaService.colaboradores.findMany({
      where: itemsPesquisados,
      select: {
        id: true,
        nome_completo: true,
        isAtivado: true,
        usuarios: {
          select: { login: true, telefone: true, email: true },
        },
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarUmPorId(id: string) {
    return await this.prismaService.colaboradores.findFirst({
      where: { id },
      select: {
        id: true,
        nome_completo: true,
        isAtivado: true,
        usuarios: {
          select: {
            id: true,
            login: true,
            telefone: true,
            email: true,
          },
        },
      },
    });
  }

  async editarUmPorId(id: string, colaborador: ColaboradorCriadoDto) {
    return await this.prismaService.colaboradores.update({
      where: { id },
      data: colaborador,
    });
  }

  async deletarUmPorId(id: string) {
    return await this.prismaService.colaboradores.delete({
      where: { id },
    });
  }

  async salvar(colaborador: ColaboradorCriadoDto) {
    return await this.prismaService.colaboradores.create({
      data: colaborador,
    });
  }
}
