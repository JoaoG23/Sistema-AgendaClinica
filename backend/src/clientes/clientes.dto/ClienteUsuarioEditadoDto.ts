import { IsNotEmpty } from 'class-validator';

export class ClienteUsuarioEditadoDto {
  @IsNotEmpty({
    message: 'O Campo nome_completo não existe',
  })
  nome_completo: string;

  isAtivado?: boolean;

  @IsNotEmpty({
    message: 'O Campo login não existe',
  })
  login: string;

  @IsNotEmpty({
    message: 'O Campo telefone não existe',
  })
  telefone: string;
  usuariosId: string;

  email?: string;
  senha?: string;
  perfil_usuariosId?: string;
}
