import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm, UseFormHandleSubmit } from "react-hook-form";

import { Button } from "../../../../../Components/Buttons/Button";
import { InputDefault } from "../../../../../Components/Inputs/InputDefault";

import { AlertCampoVazio } from "../../../../../Components/alerts/AlertCampoVazio";

type Props = {
  funcaoSubmit: UseFormHandleSubmit<FieldValues> | any;
};
export const CamposFormulario: React.FC<Props> = ({ funcaoSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [senhaConfirmacao, senha] = watch(["confirma_senha", "senha"]);

  const [showAlertPaswordDifferents, setShowAlertPaswordDifferents] =
    useState<boolean>(false);
  const isPasswordsAreDifferents = senhaConfirmacao !== senha;
  useEffect(() => {
    if (isPasswordsAreDifferents) {
      setShowAlertPaswordDifferents(true);
    }
  }, [isPasswordsAreDifferents]);

  const navigate = useNavigate();
  return (
    <form className="grid gap-2" onSubmit={handleSubmit(funcaoSubmit)}>
      <InputDefault
        name={"nome_completo"}
        register={register}
        label="Nome e Sobrenome"
      />
      {errors.nome_completo?.type === "required" && (
        <AlertCampoVazio mensagem={"Nome e Sobrenome vazio"} />
      )}
      <InputDefault name={"login"} register={register} label="Usuário" />
      {errors.login?.type === "required" && (
        <AlertCampoVazio mensagem={"Usuário vazio"} />
      )}

      <InputDefault
        name={"senha"}
        type="password"
        register={register}
        label="Senha"
      />
      {errors.senha?.type === "required" && (
        <AlertCampoVazio mensagem={"Senha vazia"} />
      )}
      <InputDefault
        name={"confirma_senha"}
        type="password"
        register={register}
        label="Confirmar senha"
      />
      {errors.confirma_senha?.type === "required" && (
        <AlertCampoVazio mensagem={"Confirmação senha"} />
      )}
      {showAlertPaswordDifferents && (
        <AlertCampoVazio
          mensagem={"Senha confirmação e senha comum estão diferentes!"}
        />
      )}

      <InputDefault name={"telefone"} register={register} label="Telefone" />
      {errors.telefone?.type === "required" && (
        <AlertCampoVazio mensagem={"Telefone vazio"} />
      )}
      <InputDefault name={"email"} register={register} label="E-mail" />
      {errors.email?.type === "required" && (
        <AlertCampoVazio mensagem={"E-mail vazio"} />
      )}

      <div className="grid gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <Button color="tertiary" onClick={() => navigate("/")}>
          <p>Voltar</p>
        </Button>
        <Button type="submit" color="primary">
          <p>Registrar</p>
        </Button>
      </div>
    </form>
  );
};
