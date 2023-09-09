import { Injectable } from '@nestjs/common';
import { CriarUsuariosDto } from '../usuarios.dto/CriarUsuarioDto';
import { EditarUsuariosDto } from '../usuarios.dto/EditarUsuarioDto';

@Injectable()
export abstract class UsuariosRepositoriesInterface {
  abstract salvar(usuario: CriarUsuariosDto);
  abstract buscarUmPorLogin(login: string);
  abstract buscarUmPorTelefone(telefone: string);
  abstract buscarUmPorEmail(email: string);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
  abstract contarTodosPorCriterio();
  abstract buscarUmPorId(id: string);
  abstract deletarUmPorId(id: string);
  abstract editarUmPorId(id: string, usuario: EditarUsuariosDto);
}
