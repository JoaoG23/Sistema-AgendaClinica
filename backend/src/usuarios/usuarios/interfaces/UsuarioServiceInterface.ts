import { Injectable } from '@nestjs/common';

import { CriarUsuariosDto } from '../usuarios.dto/CriarUsuarioDto';
import { EditarUsuariosDto } from '../usuarios.dto/EditarUsuarioDto';

@Injectable()
export abstract class UsuariosServiceInterface {
  abstract validarSeExisteLogin(login: string);
  abstract validarSeExisteTelefone(telefone: string);
  abstract validarSeExisteEmail(email: string);
  abstract validarNaoExisteId(id: string);

  abstract criarUm(usuario: CriarUsuariosDto);
  abstract editarUmPorId(id: string, usuario: EditarUsuariosDto);
  abstract deletarUmPorId(id: string);

  abstract buscarUmPorLogin(login: string);
  abstract buscarUmPorId(id: string);
  abstract buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemsPagina: number,
  );
}
