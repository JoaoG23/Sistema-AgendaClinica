import { Injectable } from '@nestjs/common';
import { CriarUsuariosDto } from '../usuarios.dto/CriarUsuarioDto';

@Injectable()
export abstract class UsuariosRepositoriesInterface {
  abstract salvar(usuario: CriarUsuariosDto);
  abstract buscarUmPorLogin(login: string);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract contarTodosPorCriterio();
  abstract buscarUmPorId(id: string);
  abstract deletarUmPorId(id: string);
}
