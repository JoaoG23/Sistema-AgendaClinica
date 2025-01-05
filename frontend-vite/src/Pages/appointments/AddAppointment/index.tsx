import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

import { createAppointment } from "./api/createAppointment";

import { FieldsForm } from "./FieldsForm";

import { ErroResponse } from "../../../types/authentication/ErroResponse";
import { AppointmentSaved } from "../types/AppointmentSaved";
import { Button, Modal } from "flowbite-react";
import { IoAddCircle } from "react-icons/io5";
import { addSecondsInDatetime } from "../../../utils/datetime/addSecondsInDatetime/addSecondsInDatetime";
import { navigateToPageAfterSelectedTime } from "../../../utils/navigation-page/navigateToPageAfterSelectedTime/navigateToPageAfterSelectedTime";

export const AddAppointment: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const closeModalHandler = () => setOpenModal(false);
  const openModalHandler = () => setOpenModal(true);
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    async (appointment: AppointmentSaved) =>
      await createAppointment(appointment),
    {
      onError: (error: ErroResponse) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        toast.success("Agendamento criado com sucesso!");
        closeModalHandler();
        navigateToPageAfterSelectedTime(navigate, 0);
      },
    }
  );

  return (
    <>
      <Button
        className="bg-fuchsia-700 hover:bg-fuchsia-100"
        color="purple"
        pill
        onClick={() => openModalHandler()}
      >
        <IoAddCircle size={18} />
        Adicionar
      </Button>
      <Modal show={openModal} onClose={() => closeModalHandler()}>
        <Modal.Header>
          <h1 className="pt-2 pr-3 font-bold">Adicionar Agendamento</h1>
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
            isLoading={isLoading}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
