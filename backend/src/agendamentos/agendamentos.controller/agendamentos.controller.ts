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

import { AgendamentosService } from '../agendamentos.service/agendamentos.service';

import { AgendamentoPesquisadoDto } from '../agendamentos.dto/AgendamentoPesquisadoDto';
import { AgendamentoCriadoDto } from '../agendamentos.dto/AgendamentoCriadoDto';

@Controller('agendamentos')
export class AgendamentosController {
  constructor(private readonly agendamentosService: AgendamentosService) {}

  @Get()
  async buscarTodos() {
    return await this.agendamentosService.buscarTodos();
  }

  @Get('pagina')
  async buscarTodosPorPagina(
    @Query('numero_pagina') numero_pagina,
    @Query('quantidade_items') quantidade_items,
  ) {
    return await this.agendamentosService.buscarTodosPorPagina(
      numero_pagina,
      quantidade_items,
    );
  }
  @Get('pesquisar')
  async pesquisarTodosPorCriteriosEPagina(@Query() criterios) {
    const criteriosComPaginacao: AgendamentoPesquisadoDto = {
      ...criterios,
      numeroPagina: criterios.numero_pagina,
      quantidadeItemsPagina: criterios.quantidade_items,
    };
    return await this.agendamentosService.pesquisarTodosPorCriteriosEPagina(
      criteriosComPaginacao,
    );
  }
  @Get(':id')
  async buscarUmPorId(@Param('id') id: string) {
    return await this.agendamentosService.buscarUmPorId(id);
  }

  @Put(':id')
  async editarUmPorId(
    @Param('id') id: string,
    @Body() agendamento: AgendamentoCriadoDto,
  ) {
    return await this.agendamentosService.editarUmPorId(id, agendamento);
  }

  @Post()
  async criarUm(@Body() agendamento: AgendamentoCriadoDto) {
    return await this.agendamentosService.criarUm(agendamento);
  }

  @Delete(':id')
  async deletarUmPorId(@Param('id') id: string) {
    return await this.agendamentosService.deletarUmPorId(id);
  }
}
