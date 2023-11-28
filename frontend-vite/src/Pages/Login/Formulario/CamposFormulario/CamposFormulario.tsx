import { useNavigate } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import React from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";

import { InputDefault } from "../../../../Components/Inputs/InputDefault";

import { CamposStyle } from "./styles";

import { AlertCampoVazio } from "../../../../Components/alerts/AlertCampoVazio";
import { Button } from "../../../../Components/Buttons/Button";

type Props = {
  funcaoSubmit: any;
};
export const CamposFormulario: React.FC<Props> = ({ funcaoSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  return (
    <CamposStyle onSubmit={handleSubmit(funcaoSubmit)}>
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

      <Button tipo="primary">
        <p>Logar</p>
        <FiLogIn />
      </Button>
      <div>
        <Button tipo="secondary" onClick={navigate('registrar_cliente')}>
          <p>Registrar Cliente</p>
          <BsFillPersonPlusFill />
        </Button>
      </div>
    </CamposStyle>
  );
};
