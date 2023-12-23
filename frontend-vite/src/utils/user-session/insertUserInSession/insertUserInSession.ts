export const insertUserInSession = (
  id: string,
  nome: string,
  token: string
) => {
  localStorage.setItem("id", id);
  localStorage.setItem("nome", nome);
  localStorage.setItem("token", token);
};
