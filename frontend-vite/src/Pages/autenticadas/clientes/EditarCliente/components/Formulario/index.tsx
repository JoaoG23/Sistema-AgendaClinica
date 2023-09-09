import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormularioAdicionarEditar";

import { ClienteUsuario } from "../../../../../../types/cliente/ClienteUsuario";

import {
  editarClienteEUsuarioPorId,
  buscarClienteEUsuarioPorId,
} from "../../api";

import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { ErrorResposta } from "../../../../../../types/Respostas/ErrorResposta/ErroResposta";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

export const Formulario: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: isCarregandoCliente, data } = useQuery(
    ["ver-um-item-cliente", id],
    () => buscarClienteEUsuarioPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const cliente = data?.data;

  const { mutate, isLoading, isSuccess } = useMutation(
    async (cliente: ClienteUsuario) =>
      await editarClienteEUsuarioPorId(id!, cliente),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-cliente");
        queryClient.invalidateQueries("listar-cliente-por-pagina");
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

  const clienteEUsuario = {
    nome_completo: cliente?.nome_completo,
    usuariosId: cliente?.usuarios?.id,
    isAtivado: cliente?.isAtivado,
    login: cliente?.usuarios?.login,
    email: cliente?.usuarios?.email,
    telefone: cliente?.usuarios?.telefone,
  };

  useEffect(() => {
    reset(clienteEUsuario);
  }, [cliente]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((cliente: any) => {
          mutate(cliente as ClienteUsuario);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
      {isCarregandoCliente && <ModalCarregando />}
    </>
  );
};
