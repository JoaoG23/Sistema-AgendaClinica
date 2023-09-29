import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { calcularQuantidadePaginas } from 'src/utils/paginacao/calcularQuantidadePaginas/calcularQuantidadePaginas';

import { AgendamentosRepositoriesInterface } from '../interfaces/AgendamentosRepositoriesInterface';
import { AgendamentoCriadoDto } from '../agendamentos.dto/AgendamentoCriadoDto';
import { AgendamentoPesquisadoDto } from '../agendamentos.dto/AgendamentoPesquisadoDto';
import { AgendamentoFiltrado } from '../types/AgendamentoFiltrado';

@Injectable()
export class AgendamentosRepositories
  implements AgendamentosRepositoriesInterface
{
  constructor(private readonly prismaService: PrismaService) {}

  retornarCamposClienteEColaborador() {
    return {
      id: true,
      dataHoraInicio: true,
      dataHoraFim: true,
      valor: true,
      isServicoConcluido: true,
      observacao: true,
      servicos_estabelecimento_agendamentos: true,
      clientesId: true,
      colaboradoresId: true,
      colaboradores: {
        select: {
          nome_completo: true,
        },
      },
      clientes: {
        select: {
          nome_completo: true,
        },
      },
    };
  }

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
      select: this.retornarCamposClienteEColaborador(),
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarTodos() {
    return await this.prismaService.agendamentos.findMany({
      select: this.retornarCamposClienteEColaborador(),
    });
  }

  async buscarAgendamentosPorFiltro(filtros: AgendamentoFiltrado) {
    const { clientesId, colaboradoresId, dataHoraInicio, dataHoraFim } =
      filtros;

    const where = {
      clientesId,
      colaboradoresId,
      OR: [
        {
          dataHoraInicio: {
            gte: new Date(dataHoraInicio),
            lte: new Date(dataHoraFim),
          },
        },
        {
          dataHoraFim: {
            gte: new Date(dataHoraInicio),
            lte: new Date(dataHoraFim),
          },
        },
      ],
    };

    const agendamento = await this.prismaService.agendamentos.findMany({
      where,
    });

    return agendamento;
  }

  async pesquisarTodosPorCriteriosEPagincao(
    criterios: AgendamentoPesquisadoDto,
  ) {
    const { quantidadeItemsPagina, numeroPagina, ...criteriosPesquisa } =
      criterios;

    const { nome_cliente, nome_colaborador, dataHoraPesquisada } =
      criteriosPesquisa;

    const itemsPesquisados = {
      dataHoraInicio: {
        gte: dataHoraPesquisada,
        lt: dataHoraPesquisada,
      },
      colaboradores: {
        nome_completo: {
          contains: nome_colaborador,
        },
      },
      clientes: {
        nome_completo: {
          contains: nome_cliente,
        },
      },
    };

    const quantidadeTotalRegistros =
      await this.prismaService.agendamentos.count({
        where: itemsPesquisados,
      });

    const itemsPorPagina = Number(quantidadeItemsPagina);

    const totalQuantidadePaginas = await calcularQuantidadePaginas(
      itemsPorPagina,
      quantidadeTotalRegistros,
    );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const itemsPagina = await this.prismaService.agendamentos.findMany({
      where: itemsPesquisados,
      select: this.retornarCamposClienteEColaborador(),
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async pesquisarTodosPorCriteriosComDataEPagincao(
    criteriosComData: AgendamentoPesquisadoDto,
  ) {
    const { quantidadeItemsPagina, numeroPagina, ...criteriosPesquisa } =
      criteriosComData;

    const { nome_cliente, nome_colaborador, dataHoraPesquisada } =
      criteriosPesquisa;

    const dataHoraInicio = {
      gte: new Date(dataHoraPesquisada + 'T00:00:00.00Z'),
      lte: new Date(dataHoraPesquisada + 'T23:59:00.00Z'),
    };

    const itemsPesquisados = {
      dataHoraInicio,
      colaboradores: {
        nome_completo: {
          contains: nome_colaborador,
        },
      },
      clientes: {
        nome_completo: {
          contains: nome_cliente,
        },
      },
    };

    const quantidadeTotalRegistros =
      await this.prismaService.agendamentos.count({
        where: itemsPesquisados,
      });

    const itemsPorPagina = Number(quantidadeItemsPagina);

    const totalQuantidadePaginas = await calcularQuantidadePaginas(
      itemsPorPagina,
      quantidadeTotalRegistros,
    );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const itemsPagina = await this.prismaService.agendamentos.findMany({
      where: itemsPesquisados,
      select: this.retornarCamposClienteEColaborador(),
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarUmPorId(id: string) {
    return await this.prismaService.agendamentos.findFirst({
      where: { id },
      select: this.retornarCamposClienteEColaborador(),
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
