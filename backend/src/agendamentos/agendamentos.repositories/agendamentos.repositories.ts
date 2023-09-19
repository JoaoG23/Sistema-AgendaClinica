import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { calcularQuantidadePaginas } from 'src/utils/paginacao/calcularQuantidadePaginas/calcularQuantidadePaginas';

import { AgendamentosRepositoriesInterface } from '../interfaces/AgendamentosRepositoriesInterface';
import { AgendamentoCriadoDto } from '../agendamentos.dto/AgendamentoCriadoDto';
import { AgendamentoPesquisadoDto } from '../agendamentos.dto/AgendamentoPesquisadoDto';

@Injectable()
export class AgendamentosRepositories
  implements AgendamentosRepositoriesInterface
{
  constructor(private readonly prismaService: PrismaService) {}

  async contarTodosPorCriterio() {
    return await this.prismaService.agendamentos.count({});
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

    const itemsPagina = await this.prismaService.agendamentos.findMany({
      // select: {
      //   id: true,
      //   nome_completo: true,
      //   isAtivado: true,
      //   usuarios: {
      //     select: { login: true, telefone: true, email: true },
      //   },
      // },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async pesquisarTodosPorCriteriosEPagincao(
    criterios: AgendamentoPesquisadoDto,
  ) {
    const { quantidadeItemsPagina, numeroPagina, ...criteriosPesquisa } =
      criterios;

    // const { nome_cliente, nome_colaborador } = criteriosPesquisa;

    // const itemsPesquisados = {
    //   nome_completo: { contains: nome_completo },
    //   usuarios: {
    //     email: {
    //       contains: email,
    //     },
    //   },
    // };

    // const quantidadeTotalRegistros =
    //   await this.prismaService.agendamentos.count({
    //     where: itemsPesquisados,
    //   });
    // const itemsPorPagina = Number(quantidadeItemsPagina);
    // const totalQuantidadePaginas = await calcularQuantidadePaginas(
    //   itemsPorPagina,
    //   quantidadeTotalRegistros,
    // );
    // const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    // const itemsPagina = await this.prismaService.agendamentos.findMany({
    //   where: itemsPesquisados,
    //   select: {
    //     id: true,
    //     nome_completo: true,
    //     isAtivado: true,
    //     usuarios: {
    //       select: { login: true, telefone: true, email: true },
    //     },
    //   },
    //   skip: pularPagina,
    //   take: itemsPorPagina,
    // });

    // return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarUmPorId(id: string) {
    // return await this.prismaService.agendamentos.findFirst({
    //   where: { id },
    //   select: {
    //     id: true,
    //     nome_completo: true,
    //     isAtivado: true,
    //     usuarios: {
    //       select: {
    //         id: true,
    //         login: true,
    //         telefone: true,
    //         email: true,
    //       },
    //     },
    //   },
    // });
    return await this.prismaService.agendamentos.findUnique({
      where: { id },
    });
  }

  async editarUmPorId(id: string, agendamento: AgendamentoCriadoDto) {
    return await this.prismaService.agendamentos.update({
      where: { id },
      data: agendamento,
    });
  }

  async deletarUmPorId(id: string) {
    return await this.prismaService.agendamentos.delete({
      where: { id },
    });
  }

  async salvar(agendamento: AgendamentoCriadoDto) {
    return await this.prismaService.agendamentos.create({
      data: agendamento,
    });
  }
}
