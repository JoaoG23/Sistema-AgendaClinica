import { Injectable } from '@nestjs/common';
import { ColaboradorCriadoDto } from '../colaboradores.dto/ColaboradorCriadoDto';
import { ColaboradorPesquisadoDto } from '../colaboradores.dto/ColaboradorPesquisadoDto';

@Injectable()
export abstract class ColaboradoresRepositoriesInterface {
  abstract salvar(Colaborador: ColaboradorCriadoDto);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract pesquisarTodosPorCriteriosEPagincao(
    criteriosBusca: ColaboradorPesquisadoDto,
  );
  abstract contarTodosPorCriterio();
  abstract buscarUmPorId(id: string);
  abstract editarUmPorId(id: string, Colaborador: ColaboradorCriadoDto);
  abstract deletarUmPorId(id: string);
}
