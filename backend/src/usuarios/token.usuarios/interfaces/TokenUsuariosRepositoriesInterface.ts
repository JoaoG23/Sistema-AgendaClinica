import { Injectable } from '@nestjs/common';

import { CriarTokenDto } from '../token.usuarios.dto/TokenCriadoDto';
import { TokenEditadoDto } from '../token.usuarios.dto/TokenEditadoDto';

@Injectable()
export abstract class TokenUsuariosRepositoriesInterface {
  abstract salvar(tokenDados: CriarTokenDto);
  abstract editarUmPorId(id: number, token: TokenEditadoDto);
  abstract buscarTodos();
  abstract buscarUmPorEmail(email: string);
  abstract buscarUmPorToken(token: string);
  abstract buscarUmPorTokenAtivado(token: string);
}
