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
  abstract pesquisarTodosPorCriteriosEPagincao(
    criteriosBusca: AgendamentoPesquisadoDto,
  );
  abstract contarTodosPorCriterio();
  abstract buscarUmPorId(id: string);
  abstract editarUmPorId(id: string, agendamento: AgendamentoCriadoDto);
  abstract deletarUmPorId(id: string);
}
