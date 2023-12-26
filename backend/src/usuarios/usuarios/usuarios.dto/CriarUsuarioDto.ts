import { IsNotEmpty } from 'class-validator';

export class CriarUsuariosDto {
  @IsNotEmpty({
    message: 'O Campo login não existe',
  })
  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Paulo Salvatore
   */
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

  clientesId?: string;

  isAtivado: boolean;

  colaboradoresId?: string;

  perfil_usuariosId?: string;
}
