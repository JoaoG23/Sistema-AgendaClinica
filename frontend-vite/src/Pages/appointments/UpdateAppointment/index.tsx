import { Button, Modal } from "flowbite-react";
import { IoAddCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import React, { SetStateAction, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

import { updateAppointment } from "./api/updateAppointment";

import { FieldsForm } from "./FieldsForm";

import { ErroResponse } from "../../../types/authentication/ErroResponse";
import { AppointmentSaved } from "../types/AppointmentSaved";
import { addSecondsInDatetime } from "../../../utils/datetime/addSecondsInDatetime/addSecondsInDatetime";
import { navigateToPageAfterSelectedTime } from "../../../utils/navigation-page/navigateToPageAfterSelectedTime/navigateToPageAfterSelectedTime";
import { useForm } from "react-hook-form";
import { getAppointmentById } from "./api/getAppointmentById";
import { Appointment } from "../types/Appointment";

type Props = {
  id: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

function convertDatetimeToInputDate(datetime: string | undefined) {
  if (!datetime) return "";
  return datetime.slice(0, 16);
}
export const UpdateAppointment: React.FC<Props> = ({
  id,
  openModal,
  setOpenModal,
}) => {
  // const [openModal, setOpenModal] = useState<boolean>(false);

  // // const closeModalHandler = () => setOpenModal(false);
  // // const openModalHandler = () => setOpenModal(true);
  // useEffect(() => {
  //   showModalSetter(false);
  // }, [openModal]);

  const navigate = useNavigate();

  const { isLoading: isLoadingAppointment, data: previousAppointmentData } =
    useQuery(["appointment-by-id", id], () => getAppointmentById(id), {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    });

  const { mutate, isLoading: isLoadingUpdate } = useMutation(
    async (appointment: AppointmentSaved) =>
      await updateAppointment(appointment),
    {
      onError: (error: ErroResponse) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        toast.success("Agendamento atualizado com sucesso!");
        // closeModalHandler();
        navigateToPageAfterSelectedTime(navigate, 0);
      },
    }
  );

  const previousAppointment: Appointment = previousAppointmentData?.data || {};

  const dateStart = convertDatetimeToInputDate(
    previousAppointment.dataHoraInicio
  );
  // const dateStart = previousAppointment.dataHoraInicio;
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
            onSubmit={(appointment: AppointmentSaved) => {
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
