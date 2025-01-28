import { endpoint } from "../../../../../services/api";

export async function getCostumers() {
  const response = await endpoint.get(`/clientes`);
  return response;
}
