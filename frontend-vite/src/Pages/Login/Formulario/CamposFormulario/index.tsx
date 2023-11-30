import { useNavigate } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import React from "react";
import { FieldValues, useForm, UseFormHandleSubmit } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";

import { InputDefault } from "../../../../Components/Inputs/InputDefault";

import { AlertCampoVazio } from "../../../../Components/alerts/AlertCampoVazio";
import { Button } from "../../../../Components/Buttons/Button";

type Props = {
  funcaoSubmit: UseFormHandleSubmit<FieldValues> | any;
};
export const CamposFormulario: React.FC<Props> = ({ funcaoSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  return (
    <form className="grid gap-2" onSubmit={handleSubmit(funcaoSubmit)}>
      <InputDefault
        name={"login"}
        register={register}
        label="Usuário"
      />
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

      <div className="grid gap-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        <Button type="submit" color="primary">
          <p>Logar</p>
          <FiLogIn />
        </Button>
        <Button color="secondary" onClick={() => navigate("/")}>
          <p>Registrar Cliente</p>
          <BsFillPersonPlusFill />
        </Button>
      </div>
    </form>
  );
};
