import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarAgendamentosPorId } from "../../api";

import { Agendamento } from "../../../../../../types/agendamento/Agendamento";

import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";
import { CamposFormularioVisualizar } from "../../../ComponentesParaTodos/campos/CamposFormularioVisualizar";

export const Formulario: React.FC = () => {
  const { id } = useParams();

  const { isLoading: isCarregandoagendamento, data } = useQuery(
    ["ver-um-item-agendamento", id],
    () => buscarAgendamentosPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const agendamento = data?.data;

  const { register, control, reset } = useForm<Agendamento>({});

  const agendamentoComDataHoraExibiveis = {
    ...agendamento,
    dataHoraInicio: String(agendamento?.dataHoraInicio).slice(0, 16),
    dataHoraFim: String(agendamento?.dataHoraFim).slice(0, 16),
  };

  useEffect(() => {
    reset(agendamentoComDataHoraExibiveis);
  }, [agendamento]);

  return (
    <>
      <CamposFormularioVisualizar register={register} control={control} />
      {isCarregandoagendamento && <ModalCarregando />}
    </>
  );
};
