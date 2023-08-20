import { Injectable } from '@nestjs/common';
import { CriarClienteDto } from '../clientes.dto/CriarClienteDto';

@Injectable()
export abstract class ClientesRepositoriesInterface {
  abstract salvar(cliente: CriarClienteDto);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract contarTodosPorCriterio();
  abstract buscarUmPorId(id: string);
  abstract editarUmPorId(id: string, cliente: CriarClienteDto);
  abstract deletarUmPorId(id: string);
}
