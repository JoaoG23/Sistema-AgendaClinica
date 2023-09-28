import { IsNotEmpty } from 'class-validator';

export class EditarUsuariosDto {
  @IsNotEmpty({
    message: 'O Campo login não existe',
  })
  login: string;

  @IsNotEmpty({
    message: 'O Campo telefone não existe',
  })
  telefone: string;
  email?: string;
  perfil_usuariosId?: string;
}
