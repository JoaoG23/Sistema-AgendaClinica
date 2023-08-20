import { IsNotEmpty } from 'class-validator';

export class CriarClienteDto {
  @IsNotEmpty({
    message: 'O Campo nome_completo não existe',
  })
  nome_completo: string;
  isAtivado?: boolean;
}
