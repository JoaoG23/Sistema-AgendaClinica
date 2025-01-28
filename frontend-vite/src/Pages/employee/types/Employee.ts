export type Employee = {
  id: string;
  nome_completo: string;
  isAtivado: true;
  usuarios?: {
    login: string;
    telefone: string;
    email?:string;
  };
};
