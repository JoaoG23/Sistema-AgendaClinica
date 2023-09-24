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
import { ColaboradorCriadoDto } from '../colaboradores.dto/ColaboradorCriadoDto';
import { ColaboradorUsuarioDto } from '../colaboradores.dto/ColaboradorUsuarioDto';
import { ColaboradorPesquisadoDto } from '../colaboradores.dto/ColaboradorPesquisadoDto';
import { ColaboradoresService } from '../colaboradores.service/colaboradores.service';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Get()
  async buscarTodos() {
    return await this.colaboradoresService.buscarTodos();
  }
  @Get('paginas')
  async buscarTodosPorPagina(
    @Query('numero_pagina') numero_pagina,
    @Query('quantidade_items') quantidade_items,
  ) {
    return await this.colaboradoresService.buscarTodosPorPagina(
      numero_pagina,
      quantidade_items,
    );
  }
  @Get('pesquisar')
  async pesquisarTodosPorCriteriosEPagina(@Query() criterios) {
    const criteriosComPaginacao: ColaboradorPesquisadoDto = {
      ...criterios,
      numeroPagina: criterios.numero_pagina,
      quantidadeItemsPagina: criterios.quantidade_items,
    };
    return await this.colaboradoresService.pesquisarTodosPorCriteriosEPagina(
      criteriosComPaginacao,
    );
  }
  @Get(':id')
  async buscarUmPorId(@Param('id') id: string) {
    return await this.colaboradoresService.buscarUmPorId(id);
  }

  @Put(':id')
  async editarUmPorId(
    @Param('id') id: string,
    @Body() colaborador: ColaboradorCriadoDto,
  ) {
    return await this.colaboradoresService.editarUmPorId(id, colaborador);
  }
  @Put('usuario/:id')
  async editarUsuarioEColaboradorUmPorIdColaborador(
    @Param('id') id: string,
    @Body() usuarioColaborador: ColaboradorUsuarioDto,
  ) {
    return await this.colaboradoresService.editarUsuarioEColaboradorUmPorIdColaborador(
      id,
      usuarioColaborador,
    );
  }

  @Post()
  async criarUm(@Body() Colaborador: ColaboradorCriadoDto) {
    return await this.colaboradoresService.criarUm(Colaborador);
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    return await this.colaboradoresService.deletarUmPorId(id);
  }
}
