import { IsNotEmpty } from 'class-validator';

export class AgendamentoPesquisadoDto {
  nome_cliente?: string;
  nome_colaborador?: boolean;
  dataHoraInicio?: string;

  @IsNotEmpty({
    message: 'O Campo quantidadeItemsPagina não existe',
  })
  quantidadeItemsPagina: number;
  @IsNotEmpty({
    message: 'O Campo numeroPagina não existe',
  })
  numeroPagina: number;
}
