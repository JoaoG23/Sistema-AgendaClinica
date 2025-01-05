import { endpoint } from "../../../../services/api";
import { AppointmentSaved } from "../../types/AppointmentSaved";

export async function updateAppointmentById(id: string, appointment: AppointmentSaved) {
  const response = await endpoint.put(`/agendamentos/${id}`, appointment);
  return response;
}
