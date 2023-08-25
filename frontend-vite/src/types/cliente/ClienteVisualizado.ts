export type ClienteVisualizado = {
  id: string;
  nome_completo: string;
  isAtivado: boolean;
  usuarios?: {
    login: string;
    telefone: string;
    email: string;
  };
};
