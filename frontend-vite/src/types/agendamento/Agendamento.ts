export type Agendamento = {
  id: string;
  dataHoraInicio: Date;
  dataHoraFim: Date;
  valor: number;
  isServicoConcluido?: boolean;
  observacao?: string;
  servicos_estabelecimento_agendamentos: string[];
  
  colaboradores?: {
    nome_completo?: string;
  };
  clientes?: {
    nome_completo?: string;
  };
};
