import { endpoint } from "../../../../../services/endpoint";
import { ClientePesquisado } from "../../../../../types/cliente/ClientePesquisado";

export async function pesquisarClientesPorCriteriosEPaginacao(
  numero_pagina: number,
  criteriosBusca: ClientePesquisado
) {
  const { nome_completo, email } = criteriosBusca;
  const resposta = await endpoint.get(`/clientes/pesquisar`, {
    params: {
      numero_pagina,
      quantidade_items: 4,
      nome_completo,
      email,
    },
  });
  return resposta;
}
