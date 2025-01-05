export function convertDatetimeToInputDate(datetime: string | undefined) {
  if (!datetime) return "";
  return datetime.slice(0, 16);
}
