import { Appointment } from "../../../types/Appointment";
/*

@Autor Joao Guilherme
converte dataHora dos dados
vindo do Agendamento backend
para eventos do calendario
bigCalendar

*/

function convertDatetimeToTimeZoneLocal(datetime: string) {
  return datetime.replace("Z", "");
}
export function convertDatetimeToEventBigCalendar(event: Appointment) {
  const timeStart = convertDatetimeToTimeZoneLocal(event.dataHoraInicio!);
  const timeEnd = convertDatetimeToTimeZoneLocal(event.dataHoraFim!);

  const eventConverted = {
    id: event.id!,
    title: `${event?.clientes?.nome_completo || ""} - ${
      event?.colaboradores?.nome_completo || ""
    }`,
    start: "2025-01-07T08:00:00.000Z",
    end: "2025-01-07T09:00:00.000Z",
  };

  return eventConverted;
}
