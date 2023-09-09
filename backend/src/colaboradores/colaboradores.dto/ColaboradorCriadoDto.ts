import { IsNotEmpty } from 'class-validator';

export class ColaboradorCriadoDto {
  @IsNotEmpty({
    message: 'O Campo nome_completo não existe',
  })
  nome_completo: string;
  isAtivado?: boolean;
  usuariosId?: string;
  especialidade_colaboradorId?: string;
}
