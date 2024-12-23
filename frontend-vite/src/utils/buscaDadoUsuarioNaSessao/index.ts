
export function buscaDadoUsuarioNaSessao(): string | null {
  const sessionData = localStorage.getItem("token");
  return sessionData;
}
