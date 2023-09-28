export function separaDadosDataHoraComum(dataHora: Date) {

    const ano = dataHora.getFullYear();
    const mes = dataHora.getMonth();
    const dia = dataHora.getDate();
  
    const hora = dataHora.getHours();
    const minuto = dataHora.getMinutes();
  
    return {
      ano,
      mes,
      dia,
      hora,
      minuto,
    };
  }
  