import { Injectable } from '@nestjs/common';
import { CriarTokenDto } from '../token.usuarios.dto/CriarTokenDto';

@Injectable()
export abstract class TokenUsuariosRepositoriesInterface {
  abstract salvar(tokenDados: CriarTokenDto);
  abstract buscarTodos();
  abstract deletarUmPorId(id: string);
}
