import { Appointment } from "../../../types/Appointment";
import { EventBigCalendar } from "../../types/EventBigCalendar";
import { convertDatetimeToEventBigCalendar } from "../convertDatetimeToEventBigCalendar/convertDatetimeToEventBigCalendar";

export function convertEventsArray(
  appointments: Appointment[],
  arrayConverted: EventBigCalendar[]
) {
  appointments?.forEach((event: Appointment) => {
    const newEvent = convertDatetimeToEventBigCalendar(event);
    arrayConverted.push(newEvent!);
  });

  return arrayConverted;
}
