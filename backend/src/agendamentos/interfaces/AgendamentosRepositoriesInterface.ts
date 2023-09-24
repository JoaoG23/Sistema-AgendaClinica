import { Injectable } from '@nestjs/common';
import { AgendamentoCriadoDto } from '../agendamentos.dto/AgendamentoCriadoDto';
import { AgendamentoPesquisadoDto } from '../agendamentos.dto/AgendamentoPesquisadoDto';
import { AgendamentoAtualizadoHorariosDto } from '../agendamentos.dto/AgendamentoAtualizadoHorariosDto';

@Injectable()
export abstract class AgendamentosRepositoriesInterface {
  abstract salvar(agendamento: AgendamentoCriadoDto);
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
  abstract contarTodosPorCriterio();
  abstract retornarCamposClienteEColaborador();
  abstract buscarUmPorId(id: string);
  abstract editarUmPorId(
    id: string,
    agendamento: AgendamentoCriadoDto | AgendamentoAtualizadoHorariosDto,
  );
  abstract deletarUmPorId(id: string);
}
