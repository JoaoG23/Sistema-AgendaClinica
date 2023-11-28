import { AxiosResponse } from "axios";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { navegarAtePaginaDepoisTempo } from "../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { pegarUsuarioSessao } from "../../../utils/pegarUsuarioSessao";

import { registrarCliente } from "../api";

import { FormularioStyle } from "./styles";

import { CamposFormulario } from "./CamposFormulario/CamposFormulario";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";

import { ErrorResposta } from "../../../types/Respostas/ErrorResposta/ErroResposta";
import { ClienteUsuario } from "../../../types/cliente/ClienteUsuario";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    async (dadosUsuario: ClienteUsuario) => await registrarCliente(dadosUsuario),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: (dados: AxiosResponse) => {
        const usuario = dados?.data;
        // toast.success("Login Realizado com sucesso");
        // pegarUsuarioSessao(usuario);
        navegarAtePaginaDepoisTempo(navigate, "/");
      },
    }
  );
  return (
    <FormularioStyle>
      <CamposFormulario
        funcaoSubmit={(cliente: ClienteUsuario) => {
          mutate(cliente);
        }}
      />
      {isLoading && <SpinnerCarregamento />}

    </FormularioStyle>
  );
};
