import { IsNotEmpty } from 'class-validator';

export class ColaboradorUsuarioCriadoDto {
  @IsNotEmpty({
    message: 'O Campo nome_completo não existe',
  })
  nome_completo: string;

  especialidade_colaboradorId?: string;
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

  @IsNotEmpty({
    message: 'O Campo senha não existe',
  })
  senha: string;

  email?: string;
  perfil_usuariosId?: string;
}
