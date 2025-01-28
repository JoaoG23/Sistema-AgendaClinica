import { endpoint } from "../../../../services/api";

export async function getAllAppointments() {
  const resposta = await endpoint.get(`/agendamentos`);
  return resposta;
}

export async function updateAppointment<T = unknown>(
  id: string | number,
  timeStartEnd: T
) {
  const response = await endpoint.patch(
    `/agendamentos/${id}`,
    timeStartEnd
  );
  return response;
}
