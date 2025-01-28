import moment from "moment-timezone";
import { Spinner } from "flowbite-react";

import { useNavigate } from "react-router-dom";
import { useMemo, useCallback, useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import { getAllAppointments } from "./api";
import { updateEventTime } from "./api/updateEventTime/updateEventTime";

import { translationHeaderToPortuguese } from "./configs/translationHeaderToPortuguese";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "moment/dist/locale/pt-br";

import { EventBigCalendar } from "./types/EventBigCalendar";
import { convertEventsArray } from "./utils/convertEventsArray/convertEventsArray";
import { eventStyle } from "./configs/eventStyle";
import { AddAppointment } from "../AddAppointment";

// Define o fuso horário padrão
const timeZone = "America/Sao_Paulo";
const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

export const CalendarAppointments: React.FC = () => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState<EventBigCalendar[] | any>([]);

  const { data, isLoading: isLoadingAllEvents } = useQuery(
    "appointments",
    getAllAppointments,
    {
      onError: (error: any) => {
        toast.error(`Oops! : ${error.response.data}`);
      },
    }
  );

  const { mutate: updateItemDateMutate, isLoading } = useMutation(
    async (event: any) => await updateEventTime(event),
    {
      onError: (error: any) => {
        toast.error(`Oops! : ${error.response.data}`);
      },
    }
  );

  // Convert Appointments to BigCalendar Visible
  useEffect(() => {
    const allEvents = convertEventsArray(data?.data, []).map(event => ({
      ...event,
      start: moment.tz(event.start, timeZone).toDate(),
      end: moment.tz(event.end, timeZone).toDate(),
    }));
    setAppointments(allEvents);
  }, [data]);

  // Move events
  const onMoveEvent = useCallback(
    ({ event, start, end }: any) => {
      updateItemDateMutate({ id: event.id, start: moment.tz(start, timeZone).toDate(), end: moment.tz(end, timeZone).toDate() });
      setAppointments((prev: any) => {
        const existing = prev.find((ev: any) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev: any) => ev.id !== event.id);
        const result = [...filtered, { ...existing, start, end }];
        return result;
      });
    },
    [setAppointments]
  );

  const { messages } = useMemo<any>(
    () => ({
      messages: translationHeaderToPortuguese,
    }),
    []
  );

  return (
    <section>
      <div className="flex justify-end py-2">
        <AddAppointment />
      </div>
      <DragAndDropCalendar
        defaultDate={moment().tz(timeZone).toDate()}
        selectable
        defaultView="week"
        messages={messages}
        localizer={localizer}
        resizable
        showAllEvents
        eventPropGetter={eventStyle}
        onEventDrop={onMoveEvent}
        onEventResize={onMoveEvent}
        events={appointments}
        style={{ height: 600 }}
        timeslots={1}
      />
      {isLoading || (isLoadingAllEvents && <Spinner />)}
    </section>
  );
};
