import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ClientesService } from '../clientes.service/clientes.service';
import { ClienteCriadoDto } from '../clientes.dto/ClienteCriadoDto';
import { ClientePesquisadoDto } from '../clientes.dto/ClientePesquisadoDto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  async buscarTodosPorPagina(
    @Query('numero_pagina') numero_pagina,
    @Query('quantidade_items') quantidade_items,
  ) {
    return await this.clientesService.buscarTodosPorPagina(
      numero_pagina,
      quantidade_items,
    );
  }
  @Get('pesquisar')
  async pesquisarTodosPorCriteriosEPagina(@Query() criterios) {
    const criteriosComPaginacao: ClientePesquisadoDto = {
      ...criterios,
      numeroPagina: criterios.numero_pagina,
      quantidadeItemsPagina: criterios.quantidade_items,
    };
    return await this.clientesService.pesquisarTodosPorCriteriosEPagina(
      criteriosComPaginacao,
    );
  }
  @Get(':id')
  async buscarUmPorId(@Param('id') id: string) {
    return await this.clientesService.buscarUmPorId(id);
  }

  @Put(':id')
  async editarUmPorId(
    @Param('id') id: string,
    @Body() cliente: ClienteCriadoDto,
  ) {
    return await this.clientesService.editarUmPorId(id, cliente);
  }

  @Post()
  async criarUm(@Body() cliente: ClienteCriadoDto) {
    return await this.clientesService.criarUm(cliente);
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    return await this.clientesService.deletarUmPorId(id);
  }
}
