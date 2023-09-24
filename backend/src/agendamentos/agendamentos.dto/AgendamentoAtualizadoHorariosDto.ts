import { IsNotEmpty } from 'class-validator';

export class AgendamentoAtualizadoHorariosDto {
  @IsNotEmpty({
    message: 'O Campo dataHoraInicio não existe',
  })
  dataHoraInicio: Date;

  @IsNotEmpty({
    message: 'O Campo dataHoraFim não existe',
  })
  dataHoraFim: Date;
}
