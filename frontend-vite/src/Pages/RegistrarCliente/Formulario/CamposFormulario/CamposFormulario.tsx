import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { BsArrowLeft } from "react-icons/bs";

import { InputDefault } from "../../../../Components/Inputs/InputDefault";

import { CamposStyle } from "./styles";

import { AlertCampoVazio } from "../../../../Components/alerts/AlertCampoVazio";
import { Button } from "../../../../Components/Buttons/Button";

type Props = {
  funcaoSubmit: any;
};
function useValidacaoSeSenhasSaoIguais(
  senha: string,
  senhaConfirmacao: string
) {
  const [mostrarSeSenhaValidas, setMostrarSeSenhaValidas] =
    useState<boolean>(false);

  useEffect(() => {
    const isSenhasESenhaConfirmacaoSaoIguais = senhaConfirmacao === senha;
    if (!isSenhasESenhaConfirmacaoSaoIguais) {
      setMostrarSeSenhaValidas(true);
    } else {
      setMostrarSeSenhaValidas(false);
    }
  }, [senhaConfirmacao]);
  return {
    mostrarSeSenhaValidas,
    setMostrarSeSenhaValidas,
  };
}
export const CamposFormulario: React.FC<Props> = ({ funcaoSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const senhaPrincipal = watch("senha");
  const senhaConfirmacao = watch("senha_confirmada");

  const { mostrarSeSenhaValidas } = useValidacaoSeSenhasSaoIguais(
    senhaPrincipal,
    senhaConfirmacao
  );

  return (
    <CamposStyle onSubmit={handleSubmit(funcaoSubmit)}>
      <InputDefault
        name={"nome_completo"}
        register={register}
        placeholder={"Nome completo"}
      />
      {errors.nome_completo?.type === "required" && (
        <AlertCampoVazio mensagem={"Nome vazio"} />
      )}
      <InputDefault
        name={"telefone"}
        register={register}
        placeholder={"Telefone"}
      />
      {errors.telefone?.type === "required" && (
        <AlertCampoVazio mensagem={"Telefone vazio"} />
      )}
      <InputDefault name={"email"} register={register} placeholder={"E-mail"} />
      {errors.email?.type === "required" && (
        <AlertCampoVazio mensagem={"E-mail vazio"} />
      )}
      <InputDefault
        name={"login"}
        register={register}
        placeholder={"Usuário"}
      />
      {errors.login?.type === "required" && (
        <AlertCampoVazio mensagem={"Usuário vazio"} />
      )}

      <InputDefault
        name={"senha"}
        type="password"
        register={register}
        placeholder={"Senha"}
      />
      {errors.senha?.type === "required" && (
        <AlertCampoVazio mensagem={"Senha vazia"} />
      )}
      <InputDefault
        name={"senha_confirmada"}
        type="password"
        register={register}
        placeholder={"Senha Confirmar"}
      />
      {errors.senha_confirmada?.type === "required" && (
        <AlertCampoVazio mensagem={"Senha Confirmação vazia"} />
      )}
      {mostrarSeSenhaValidas && (
        <AlertCampoVazio mensagem={"As senha digitadas acima não são iguais"} />
      )}

      <Button tipo="primary">
        <p>Registrar</p>
        <FiLogIn />
      </Button>
      <Button tipo="secondary">
        <p>Voltar</p>
        <BsArrowLeft />
      </Button>
    </CamposStyle>
  );
};
