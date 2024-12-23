
export function getTokenUserSession(): string | null {
  const token = localStorage.getItem("token");
  return token;
}
