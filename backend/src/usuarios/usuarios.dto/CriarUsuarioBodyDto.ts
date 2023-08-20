import { IsNotEmpty, IsString } from 'class-validator';

export class CriarUsuariosBodyDto {
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

  @IsString({
    message: 'clientesId deve ser string',
  })
  clientesId?: string;

  @IsString({
    message: 'colaboradoresId deve ser string',
  })
  colaboradoresId?: string;

  @IsString({
    message: 'perfil_usuariosId deve ser string',
  })
  perfil_usuariosId?: string;
}
