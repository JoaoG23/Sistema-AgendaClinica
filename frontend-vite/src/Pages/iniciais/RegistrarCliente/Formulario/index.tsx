import { AxiosResponse } from "axios";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { registrarUsuarioCliente } from "../api";

import { CamposFormulario } from "./CamposFormulario";

import { ErrorResposta } from "../../../../types/Respostas/ErrorResposta/ErroResposta";
import { RegistroClienteUsuario } from "../../../../types/autenticacao/RegistroClienteUsuario";

import { SpinnerCarregamento } from "../../../../Components/spinners/SpinnerCarregamento";

import { navegarAtePaginaDepoisTempo } from "../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { pegarUsuarioSessao } from "../../../../utils/pegarUsuarioSessao";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    async (usuarioCliente: RegistroClienteUsuario) =>
      await registrarUsuarioCliente(usuarioCliente),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: (dados: AxiosResponse) => {
        const usuario = dados?.data;
        toast.success("Cadastro realizado aguardando confirmação");
        pegarUsuarioSessao(usuario);
        navegarAtePaginaDepoisTempo(navigate, "/");
      },
    }
  );
  return (
    <>
      <CamposFormulario
        funcaoSubmit={(usuarioCliente: RegistroClienteUsuario) => {
          mutate(usuarioCliente);
        }}
      />
      {isLoading && <SpinnerCarregamento />}
    </>
  );
};
