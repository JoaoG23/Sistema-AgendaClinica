import { endpoint } from "../../../../../services/api";

export async function getEmployee() {
  const response = await endpoint.get(`/colaboradores`);
  return response;
}
