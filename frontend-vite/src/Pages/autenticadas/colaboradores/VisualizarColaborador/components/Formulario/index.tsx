import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { buscarColaboradorEUsuarioPorId } from "../../api";

import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";
import { CamposFormularioVisualizar } from "../../../ComponentesParaTodos/campos/CamposFormularioVisualizar";
import { ColaboradorVisualizado } from "../../../../../../types/colaborador/colaboradorVisualizado";

export const Formulario: React.FC = () => {
  const { id } = useParams();

  const { isLoading: isCarregandoColaborador, data } = useQuery(
    ["ver-um-item-Colaborador", id],
    () => buscarColaboradorEUsuarioPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );
  const colaborador: ColaboradorVisualizado = data?.data;

  const { register, control, reset } = useForm();

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
      <CamposFormularioVisualizar register={register} control={control} />
      {isCarregandoColaborador && <ModalCarregando />}
    </>
  );
};
