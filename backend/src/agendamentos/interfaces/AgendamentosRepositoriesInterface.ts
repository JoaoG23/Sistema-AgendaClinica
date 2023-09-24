import { Injectable } from '@nestjs/common';
import { AgendamentoCriadoDto } from '../agendamentos.dto/AgendamentoCriadoDto';
import { AgendamentoPesquisadoDto } from '../agendamentos.dto/AgendamentoPesquisadoDto';

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
  abstract editarUmPorId(id: string, agendamento: AgendamentoCriadoDto);
  abstract deletarUmPorId(id: string);
}
