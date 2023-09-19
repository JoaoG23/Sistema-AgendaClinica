import { IsNotEmpty } from 'class-validator';

export class AgendamentoCriadoDto {
  @IsNotEmpty({
    message: 'O Campo dataHoraInicio não existe',
  })
  dataHoraInicio: Date;

  @IsNotEmpty({
    message: 'O Campo dataHoraFim não existe',
  })
  dataHoraFim: Date;
  valor?: number;

  isServicoConcluido?: boolean;
  observacao?: string;
  createdAt?: Date;
  updatedAt?: Date;

  @IsNotEmpty({
    message: 'O Campo clientesId não existe',
  })
  clientesId: string;

  @IsNotEmpty({
    message: 'O Campo colaboradoresId não existe',
  })
  colaboradoresId: string;
}
