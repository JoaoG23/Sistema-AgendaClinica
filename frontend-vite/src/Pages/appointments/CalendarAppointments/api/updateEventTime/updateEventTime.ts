// Service
import { requestUpdateEventTime } from "./requestUpdateEventTime/requestUpdateEventTime";

type AppointmentBigCalendar = {
  id: string;
  start?: Date;
  end?: Date;
};

export async function updateEventTime(itemEvent: AppointmentBigCalendar) {
  const { id, start, end } = itemEvent;

  const itemAppointment = {
    dataHoraInicio: start,
    dataHoraFim: end,
  };

  await requestUpdateEventTime(id, itemAppointment);
}
