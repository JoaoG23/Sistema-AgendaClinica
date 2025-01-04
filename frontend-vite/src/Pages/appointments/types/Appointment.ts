export type Appointment = {
  id: string;
  dataHoraInicio: string;
  dataHoraFim: string;
  valor?: number;
  isServicoConcluido?: string;
  observacao?: string;
  servicos_estabelecimento_agendamentos?: [] | null;
  clientesId?: string;
  colaboradoresId?: string;
  colaboradores?: {
    nome_completo?: string;
  };
  clientes?: {
    nome_completo?: string;
  };
};
