import { endpoint } from "../../../../../services/endpoint";

export async function buscarColaboradorEUsuarioPorId(id: string) {
  const resposta = await endpoint.get(`/colaboradores/${id}`);
  return resposta;
}

export async function editarColaboradorEUsuarioPorId(
  id: string,
  ColaboradorUsuario: any
) {
  const resposta = await endpoint.put(
    `/colaboradores/usuario/${id}`,
    ColaboradorUsuario
  );
  return resposta;
}
