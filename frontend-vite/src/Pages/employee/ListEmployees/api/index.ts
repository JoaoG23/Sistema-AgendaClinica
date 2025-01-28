import { endpoint } from "../../../../services/api";
import { PageCriteria } from "../../../../types/PageCriteria";

export async function getEmployeesByPage(pagesCriterias: PageCriteria) {
  const { numero_pagina, quantidade_items } = pagesCriterias;
  const resposta = await endpoint.get(`/colaboradores/paginas`, {
    params: {
      numero_pagina: numero_pagina ,
      quantidade_items: quantidade_items,
    },
  });
  return resposta;
}
