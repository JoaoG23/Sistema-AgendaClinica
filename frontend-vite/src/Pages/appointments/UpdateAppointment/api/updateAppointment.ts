import { endpoint } from "../../../../services/api";
import { AppointmentSaved } from "../../types/AppointmentSaved";

export async function updateAppointment(appointment: AppointmentSaved) {
  const resposta = await endpoint.put(`/agendamentos`, appointment);
  return resposta;
}
