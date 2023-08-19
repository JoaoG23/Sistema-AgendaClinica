import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ClientesService } from '../clientes.service/Clientes.service';

import { CriarClientesBodyDto } from '../Clientes.dto/CriarUsuarioBodyDto';
import { Public } from 'src/auth/constants/SetMetadata';

@Controller('Clientes')
export class ClientesController {
  constructor(private readonly clientesService: clientesService) {}

  @Public()
  @Post()
  async criarUm(@Body() usuario: CriarclientesBodyDto) {
    return await this.clientesService.criarUm(usuario);
  }

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
  @Get(':id')
  async buscarUmPorId(@Param('id') id: string) {
    return await this.clientesService.buscarUmPorId(id);
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    return await this.clientesService.deletarUmPorId(id);
  }
}
