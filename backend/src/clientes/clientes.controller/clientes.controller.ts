import { ApiBearerAuth } from '@nestjs/swagger';
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
import { ClienteUsuarioCriadoDto } from '../clientes.dto/ClienteUsuarioCriadoDto';
import { ClienteUsuarioEditadoDto } from '../clientes.dto/ClienteUsuarioEditadoDto';

@ApiBearerAuth()
@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @ApiBearerAuth()
  @Get()
  async buscarTodos() {
    return await this.clientesService.buscarTodos();
  }
  @Get('paginas')
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
  @Put('usuario/:id')
  async editarUsuarioEClienteUmPorIdCliente(
    @Param('id') id: string,
    @Body() usuarioCliente: ClienteUsuarioEditadoDto,
  ) {
    return await this.clientesService.editarUsuarioEClienteUmPorIdCliente(
      id,
      usuarioCliente,
    );
  }

  @Post()
  async criarUm(@Body() clienteUsuario: ClienteUsuarioCriadoDto) {
    return await this.clientesService.criarUm(clienteUsuario);
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    return await this.clientesService.deletarUmPorId(id);
  }
}
