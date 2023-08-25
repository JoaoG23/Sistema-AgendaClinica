import { endpoint } from "../../../../../services/endpoint";

export async function listarTodosClientePorPagina(
  numero_pagina: number,
) {
  const resposta = await endpoint.get(`/clientes`, {
    params: {
      numero_pagina,
      quantidade_items: 10,
    },
  });
  return resposta;
}
