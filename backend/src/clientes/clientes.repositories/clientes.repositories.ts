import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { ClientesRepositoriesInterface } from '../interfaces/ClientesRepositoriesInterface';

import { calcularQuantidadePaginas } from 'src/utils/paginacao/calcularQuantidadePaginas/calcularQuantidadePaginas';

import { ClienteCriadoDto } from '../clientes.dto/ClienteCriadoDto';
import { ClientePesquisadoDto } from '../clientes.dto/ClientePesquisadoDto';

@Injectable()
export class ClientesRepositories implements ClientesRepositoriesInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async contarTodosPorCriterio() {
    return await this.prismaService.clientes.count({});
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

    const itemsPagina = await this.prismaService.clientes.findMany({
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

  async pesquisarTodosPorCriteriosEPagincao(criterios: ClientePesquisadoDto) {
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

    const quantidadeTotalRegistros = await this.prismaService.clientes.count({
      where: itemsPesquisados,
    });
    const itemsPorPagina = Number(quantidadeItemsPagina);
    const totalQuantidadePaginas = await calcularQuantidadePaginas(
      itemsPorPagina,
      quantidadeTotalRegistros,
    );
    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const itemsPagina = await this.prismaService.clientes.findMany({
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
    return await this.prismaService.clientes.findFirst({
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

  async editarUmPorId(id: string, cliente: ClienteCriadoDto) {
    return await this.prismaService.clientes.update({
      where: { id },
      data: cliente,
    });
  }

  async deletarUmPorId(id: string) {
    return await this.prismaService.clientes.delete({
      where: { id },
    });
  }

  async salvar(cliente: ClienteCriadoDto) {
    return await this.prismaService.clientes.create({
      data: cliente,
    });
  }
}
