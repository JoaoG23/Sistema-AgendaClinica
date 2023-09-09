import { endpoint } from "../../../../../services/endpoint";

export async function buscarClienteEUsuarioPorId(id: string) {
  const resposta = await endpoint.get(`/clientes/${id}`);
  return resposta;
}

export async function editarClienteEUsuarioPorId(
  id: string,
  clientesUsuario: any
) {
  const resposta = await endpoint.put(
    `/clientes/usuario/${id}`,
    clientesUsuario
  );
  return resposta;
}
