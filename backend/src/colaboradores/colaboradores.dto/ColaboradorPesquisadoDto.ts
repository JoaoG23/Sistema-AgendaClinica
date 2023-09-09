import { IsNotEmpty } from 'class-validator';

export class ColaboradorPesquisadoDto {
  nome_completo?: string;
  isAtivado?: boolean;
  email?: string;

  @IsNotEmpty({
    message: 'O Campo quantidadeItemsPagina não existe',
  })
  quantidadeItemsPagina: number;
  @IsNotEmpty({
    message: 'O Campo numeroPagina não existe',
  })
  numeroPagina: number;
}
