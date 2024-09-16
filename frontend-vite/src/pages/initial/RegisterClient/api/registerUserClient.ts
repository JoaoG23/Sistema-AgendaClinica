import { endpoint } from "../../../../services/api";
import { UserClientRegister } from "../../../../types/user/UserClientRegister";

export async function registerUserClient(userClient: UserClientRegister) {
  const resposta = await endpoint.post(`/registrar`, userClient);
  return resposta;
}
