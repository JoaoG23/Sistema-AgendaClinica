export class VisualizarUsuariosDto {
  id: number;
  nome?: string;
  login: string;
  senha: string;
  telefone: string;
  email?: string;
  clientesId?: string;
  colaboradoresId?: string;
  perfil_usuariosId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
