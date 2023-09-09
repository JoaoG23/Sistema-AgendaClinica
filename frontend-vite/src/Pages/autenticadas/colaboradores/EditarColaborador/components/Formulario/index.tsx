import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";

import {
  editarColaboradorEUsuarioPorId,
  buscarColaboradorEUsuarioPorId,
} from "../../api";

import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { ErrorResposta } from "../../../../../../types/Respostas/ErrorResposta/ErroResposta";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";
import { ColaboradorUsuario } from "../../../../../../types/colaborador/ColaboradorUsuario";

export const Formulario: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: isCarregandoColaborador, data } = useQuery(
    ["ver-um-item-colaborador", id],
    () => buscarColaboradorEUsuarioPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const colaborador = data?.data;

  const { mutate, isLoading, isSuccess } = useMutation(
    async (Colaborador: ColaboradorUsuario) =>
      await editarColaboradorEUsuarioPorId(id!, Colaborador),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-colaborador");
        queryClient.invalidateQueries("listar-colaborador-por-pagina");
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
  } = useForm();

  const colaboradorEUsuario = {
    nome_completo: colaborador?.nome_completo,
    usuariosId: colaborador?.usuarios?.id,
    isAtivado: colaborador?.isAtivado,
    login: colaborador?.usuarios?.login,
    email: colaborador?.usuarios?.email,
    telefone: colaborador?.usuarios?.telefone,
  };

  useEffect(() => {
    reset(colaboradorEUsuario);
  }, [colaborador]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((colaborador: any) => {
          mutate(colaborador as ColaboradorUsuario);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
      {isCarregandoColaborador && <ModalCarregando />}
    </>
  );
};
