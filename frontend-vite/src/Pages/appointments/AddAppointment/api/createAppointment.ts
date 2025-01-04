import { endpoint } from "../../../../services/api";
import { AppointmentSaved } from "../../types/AppointmentSaved";

export async function createAppointment(appointment: AppointmentSaved) {
  const resposta = await endpoint.post(`/agendamentos`, appointment);
  return resposta;
}
