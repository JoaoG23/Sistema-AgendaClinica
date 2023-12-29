import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UsuariosService } from '../usuarios.service/usuarios.service';

import { CriarUsuariosDto } from '../usuarios.dto/CriarUsuarioDto';
import { Public } from 'src/auth/constants/SetMetadata';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Public()
  @Post()
  async criarUm(@Body() usuario: CriarUsuariosDto) {
    return await this.usuariosService.criarUm(usuario);
  }

  @ApiOperation({ summary: 'Buscar todos os usuários' })
  @ApiResponse({ status: 200, description: 'Sucesso' })
  @ApiBearerAuth('access-token')
  @Get()
  async buscarTodosPorPagina(
    @Query('numero_pagina') numero_pagina,
    @Query('quantidade_items') quantidade_items,
  ) {
    return await this.usuariosService.buscarTodosPorPagina(
      numero_pagina,
      quantidade_items,
    );
  }
  @Get(':id')
  async buscarUmPorId(@Param('id') id: string) {
    return await this.usuariosService.buscarUmPorId(id);
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    return await this.usuariosService.deletarUmPorId(id);
  }
}
