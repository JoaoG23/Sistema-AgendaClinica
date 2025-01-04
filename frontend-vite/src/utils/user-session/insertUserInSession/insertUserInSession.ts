export const insertUserInSession = (
  id: string,
  token: string
) => {
  localStorage.setItem("id", id);
  localStorage.setItem("token", token);
};
