export function separaDadosDataHoraUTC(dataHora: Date) {

  const ano = dataHora.getUTCFullYear();
  const mes = dataHora.getUTCMonth();
  const dia = dataHora.getUTCDate();

  const hora = dataHora.getUTCHours();
  const minuto = dataHora.getUTCMinutes();

  return {
    ano,
    mes,
    dia,
    hora,
    minuto,
  };
}
