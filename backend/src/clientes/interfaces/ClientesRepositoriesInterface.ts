import { Injectable } from '@nestjs/common';
import { ClienteCriadoDto } from '../clientes.dto/ClienteCriadoDto';
import { ClientePesquisadoDto } from '../clientes.dto/ClientePesquisadoDto';

@Injectable()
export abstract class ClientesRepositoriesInterface {
  abstract salvar(cliente: ClienteCriadoDto);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract pesquisarTodosPorCriteriosEPagincao(
    criteriosBusca: ClientePesquisadoDto,
  );
  abstract contarTodosPorCriterio();
  abstract buscarUmPorId(id: string);
  abstract editarUmPorId(id: string, cliente: ClienteCriadoDto);
  abstract deletarUmPorId(id: string);
}
