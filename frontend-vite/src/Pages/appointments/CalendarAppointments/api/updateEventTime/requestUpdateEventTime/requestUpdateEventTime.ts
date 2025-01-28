import { updateAppointment } from "../..";

type DatetimeAppointment = {
  dataHoraInicio: Date | undefined;
  dataHoraFim: Date | undefined;
};
export async function requestUpdateEventTime(
  id: string,
  body: DatetimeAppointment
) {
  const success = await updateAppointment(id, body);
  const successData = success.data;
  return successData;
}
