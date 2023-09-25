import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";

import { buscarAgendamentosPorId, editarAgendamentoPorId } from "../../api";

import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { Agendamento } from "../../../../../../types/agendamento/Agendamento";
import { ErrorResposta } from "../../../../../../types/Respostas/ErrorResposta/ErroResposta";

import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";
import { adicionarSegundosEmDatetime } from "../../../../../../utils/datetime/adicionarSegundosEmDatetime/adicionarSegundosEmDatetime";

export const Formulario: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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

  const { mutate, isLoading, isSuccess } = useMutation(
    async (agendamento: Agendamento) =>
      await editarAgendamentoPorId(id!, agendamento),
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
    reset,
    formState: { errors },
  } = useForm<Agendamento>({});

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
      <CamposFormulario
        onSubmit={handleSubmit((agendamento: any) => {
          delete agendamento.colaboradores;
          delete agendamento.clientes;
          delete agendamento.servicos_estabelecimento_agendamentos;

          const agendamentoComHorariosComSegundos = {
            ...agendamento,
            dataHoraInicio: adicionarSegundosEmDatetime(
              agendamento.dataHoraInicio
            ),
            dataHoraFim: adicionarSegundosEmDatetime(agendamento?.dataHoraFim),
          };
          mutate(agendamentoComHorariosComSegundos as Agendamento);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
      {isCarregandoagendamento && <ModalCarregando />}
    </>
  );
};
