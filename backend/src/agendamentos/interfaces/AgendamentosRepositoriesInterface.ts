import { Injectable } from '@nestjs/common';

import { AgendamentoCriadoDto } from '../agendamentos.dto/AgendamentoCriadoDto';
import { AgendamentoPesquisadoDto } from '../agendamentos.dto/AgendamentoPesquisadoDto';

import { AgendamentoAtualizadoHorariosDto } from '../agendamentos.dto/AgendamentoAtualizadoHorariosDto';

import { AgendamentoFiltrado } from '../types/AgendamentoFiltrado';

@Injectable()
export abstract class AgendamentosRepositoriesInterface {
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract buscarTodos();
  abstract pesquisarTodosPorCriteriosEPagincao(
    criterios: AgendamentoPesquisadoDto,
  );
  abstract pesquisarTodosPorCriteriosComDataEPagincao(
    criteriosComData: AgendamentoPesquisadoDto,
  );
  abstract buscarAgendamentosPorFiltro(filtros: AgendamentoFiltrado);

  abstract contarTodosPorCriterio();
  abstract buscarUmPorId(id: string);

  abstract retornarCamposClienteEColaborador();

  abstract salvar(agendamento: AgendamentoCriadoDto);
  abstract editarUmPorId(
    id: string,
    agendamento: AgendamentoCriadoDto | AgendamentoAtualizadoHorariosDto,
  );
  abstract deletarUmPorId(id: string);
}
