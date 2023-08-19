import React from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";

import { RedFont } from "../../../../Components/FontColor/RedFont";
import { InputDefault } from "../../../../Components/Inputs/InputDefault";

import { CamposStyle } from "./styles";
import { SecondaryButton } from "../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { AlertCampoVazio } from "../../../../Components/alerts/AlertCampoVazio";
import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";
import { BsFillPersonPlusFill } from "react-icons/bs";

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

      <SecondaryButton>
        <p>Logar</p>
        <FiLogIn />
      </SecondaryButton>
      <ButtonDefault>
        <p>Registrar</p>
        <BsFillPersonPlusFill />
      </ButtonDefault>
    </CamposStyle>
  );
};
