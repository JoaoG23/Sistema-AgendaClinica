import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { ClientesRepositoriesInterface } from '../interfaces/ClientesRepositoriesInterface';

import { calcularQuantidadePaginas } from 'src/utils/paginacao/calcularQuantidadePaginas/calcularQuantidadePaginas';

import { CriarClienteDto } from '../clientes.dto/CriarClienteDto';

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
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }

  async buscarUmPorId(id: string) {
    return await this.prismaService.clientes.findFirst({
      where: { id },
    });
  }

  async editarUmPorId(id: string, cliente: CriarClienteDto) {
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

  async salvar(cliente: CriarClienteDto) {
    return await this.prismaService.clientes.create({
      data: cliente,
    });
  }
}
