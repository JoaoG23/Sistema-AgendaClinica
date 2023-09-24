import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { adicionarUmAgendamento } from "../../api";

import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { Agendamento } from "../../../../../../types/agendamento/Agendamento";
import { ErrorResposta } from "../../../../../../types/Respostas/ErrorResposta/ErroResposta";

import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";
import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";

import { adicionarSegundosEmDatetime } from "../../../../../../utils/datetime/adicionarSegundosEmDatetime/adicionarSegundosEmDatetime";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess } = useMutation(
    async (agendamento: Agendamento) =>
      await adicionarUmAgendamento(agendamento),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-agendamento");
        queryClient.invalidateQueries("listar-agendamento-por-pagina");
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Agendamento>({});

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((agendamento: Agendamento) => {
          const agendamentoComHorariosComSegundos = {
            ...agendamento,
            dataHoraInicio: adicionarSegundosEmDatetime(
              agendamento.dataHoraInicio
            ),
            dataHoraFim: adicionarSegundosEmDatetime(agendamento?.dataHoraFim),
          };
          mutate(agendamentoComHorariosComSegundos as any);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
    </>
  );
};
