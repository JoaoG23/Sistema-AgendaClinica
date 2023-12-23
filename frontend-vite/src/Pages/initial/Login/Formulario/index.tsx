import { AxiosResponse } from "axios";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { logarUsuario } from "../api";

import { CamposFormulario } from "./CamposFormulario";

import { ErrorResposta } from "../../../../types/Respostas/ErrorResposta/ErroResposta";
import { LoginUsuario } from "../../../../types/autenticacao/LoginUsuario";
import { navigateToPageAfterSelectedTime } from "../../../../utils/navigation-page/navigateToPageAfterSelectedTime/navigateToPageAfterSelectedTime";


export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    async (dadosUsuario: LoginUsuario) => await logarUsuario(dadosUsuario),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: (dados: AxiosResponse) => {
        const usuario = dados?.data;
        toast.success("Login Realizado com sucesso");
        navigateToPageAfterSelectedTime(navigate, "/contas");
        // navegarAtePaginaDepoisTempo(navigate, 0);
      },
    }
  );
  return (
    <>
      <CamposFormulario
        funcaoSubmit={(usuario: LoginUsuario) => {
          mutate(usuario);
        }}
      />
      {isLoading && 'Carregando..'}
    </>
  );
};
