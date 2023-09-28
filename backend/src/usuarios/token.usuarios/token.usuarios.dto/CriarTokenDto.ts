import { IsNotEmpty } from 'class-validator';

export class CriarTokenDto {
  @IsNotEmpty({
    message: 'O Campo login não existe',
  })
  login: string;

  @IsNotEmpty({
    message: 'O Campo senha não existe',
  })
  senha: string;

  @IsNotEmpty({
    message: 'O Campo telefone não existe',
  })
  telefone: string;
  email?: string;
  clientesId?: string;
  isAtivado: boolean;
  colaboradoresId?: string;
  perfil_usuariosId?: string;
}
