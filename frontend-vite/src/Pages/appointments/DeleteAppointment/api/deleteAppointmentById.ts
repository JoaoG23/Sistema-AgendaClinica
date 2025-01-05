import { endpoint } from "../../../../services/api";

export async function deleteAppointmentById(id: string) {
  const response = await endpoint.delete(`/agendamentos/${id}`);
  return response;
}
