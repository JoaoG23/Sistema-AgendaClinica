import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

import { updateAppointmentById } from "./api/updateAppointmentById";

import { FieldsForm } from "./FieldsForm";

import { ErroResponse } from "../../../types/authentication/ErroResponse";
import { AppointmentSaved } from "../types/AppointmentSaved";
import { addSecondsInDatetime } from "../../../utils/datetime/addSecondsInDatetime/addSecondsInDatetime";
import { navigateToPageAfterSelectedTime } from "../../../utils/navigation-page/navigateToPageAfterSelectedTime/navigateToPageAfterSelectedTime";
import { getAppointmentById } from "./api/getAppointmentById";
import { Appointment } from "../types/Appointment";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";
import { convertDatetimeToInputDate } from "../../../utils/datetime/convertDatetimeToInputDate/convertDatetimeToInputDate";

type Props = {
  idAppointment: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

export const UpdateAppointment: React.FC<Props> = ({
  idAppointment,
  openModal,
  setOpenModal,
}) => {
  const navigate = useNavigate();

  const { isLoading: isLoadingAppointment, data: previousAppointmentData } =
    useQuery(
      ["appointment-by-id", idAppointment],
      () => getAppointmentById(idAppointment),
      {
        onError: (error: any) => {
          toast.error(`Houve um error: ${error.response.data}`);
        },
      }
    );

  const { mutate, isLoading: isLoadingUpdate } = useMutation(
    async (appointment: AppointmentSaved) =>
      await updateAppointmentById(idAppointment, appointment),
    {
      onError: (error: ErroResponse) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        toast.success("Agendamento atualizado com sucesso!");
        navigateToPageAfterSelectedTime(navigate, 0);
      },
    }
  );

  const previousAppointment: Appointment = previousAppointmentData?.data || {};

  const dateStart = convertDatetimeToInputDate(
    previousAppointment.dataHoraInicio
  );
  const dateEnd = convertDatetimeToInputDate(previousAppointment.dataHoraFim);

  const {
    colaboradores,
    clientes,
    servicos_estabelecimento_agendamentos,
    ...restPreviousAppointment
  } = previousAppointment;

  const previousAppointmentValues = {
    ...restPreviousAppointment,
    dataHoraInicio: dateStart,
    dataHoraFim: dateEnd,
    valaor: Number(previousAppointment?.valor) || 0,
  };

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
          <h1 className="pt-2 pr-3 font-bold">Editar Agendamento</h1>
        </Modal.Header>
        <Modal.Body>
          <FieldsForm
            onSubmit={(data: AppointmentSaved) => {
              const appointment = {
                ...data,
                valor: Number(data.valor ?? 0),
              } as AppointmentSaved;
              appointment.dataHoraFim = addSecondsInDatetime(
                appointment.dataHoraFim
              );
              appointment.dataHoraInicio = addSecondsInDatetime(
                appointment.dataHoraInicio
              );

              mutate(appointment);
            }}
            isLoading={isLoadingAppointment || isLoadingUpdate}
            defaultValues={previousAppointmentValues}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
