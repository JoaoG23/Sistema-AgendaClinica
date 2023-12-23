import { endpoint } from "../../../../services/endpoint";

import { UserLogin } from "../../../../types/authentication/UserLogin";

export async function authUser(userLogin: UserLogin) {
  const resposta = await endpoint.post(`/auth/login`, userLogin);
  return resposta;
}
