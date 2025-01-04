export type AppointmentSaved = {
  dataHoraInicio: string | Date;
  dataHoraFim: string | Date;
  valor: number;
  observacao?: string;
  clientesId: string;
  colaboradoresId: string;
};
