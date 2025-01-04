import { endpoint } from "../../../../services/api";

export async function getAppointmentById(id: string) {
  const resposta = await endpoint.get(`/agendamentos/${id}`);
  return resposta;
}
