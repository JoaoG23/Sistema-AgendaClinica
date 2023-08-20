import { IsNotEmpty } from 'class-validator';

export class CriarUsuariosDto {
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
  colaboradoresId?: string;
  perfil_usuariosId?: string;
}
