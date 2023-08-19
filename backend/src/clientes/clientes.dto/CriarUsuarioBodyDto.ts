import { IsNotEmpty } from 'class-validator';

export class CriarUsuariosBodyDto {
  @IsNotEmpty({
    message: 'O Campo telefone não existe',
  })
  telefone: string;

  email?: string;

  @IsNotEmpty({
    message: 'O Campo login não existe',
  })
  login: string;

  @IsNotEmpty({
    message: 'O Campo senha não existe',
  })
  senha: string;
}
