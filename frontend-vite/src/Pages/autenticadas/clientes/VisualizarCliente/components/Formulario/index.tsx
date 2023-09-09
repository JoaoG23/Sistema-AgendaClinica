import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarClienteEUsuarioPorId } from "../../api";

import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";
import { CamposFormularioVisualizar } from "../../../ComponentesParaTodos/campos/CamposFormularioVisualizar";

export const Formulario: React.FC = () => {
  const { id } = useParams();

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

  const { register, control, reset } = useForm();

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
      <CamposFormularioVisualizar register={register} control={control} />
      {isCarregandoCliente && <ModalCarregando />}
    </>
  );
};
