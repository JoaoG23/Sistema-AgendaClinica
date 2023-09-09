export type ColaboradorVisualizado = {
  id: string;
  nome_completo: string;
  isAtivado: boolean;
  usuarios?: {
    id?: string;
    login: string;
    telefone: string;
    email: string;
  };
};
