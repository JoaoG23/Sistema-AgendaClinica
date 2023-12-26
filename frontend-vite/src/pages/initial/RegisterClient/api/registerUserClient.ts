import { endpoint } from "../../../../services/endpoint";

import { UserClientRegister } from "../../../../types/user/UserClientRegister";

export async function registerUserClient(userClient: UserClientRegister) {
  const resposta = await endpoint.post(`/registrar`, userClient);
  return resposta;
}
