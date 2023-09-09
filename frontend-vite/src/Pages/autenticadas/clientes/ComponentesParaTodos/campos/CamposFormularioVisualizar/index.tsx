import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { InputDefault } from "../../../../../../Components/Inputs/InputDefault";
import { Button } from "../../../../../../Components/Buttons/Button";
import { CelularInput } from "../../../../../../Components/Inputs/CelularInput";

type Props = {
  register: any;
  control: any;
};

export const CamposFormularioVisualizar: React.FC<Props> = ({
  register,
  control,
}) => {
  const navigate = useNavigate();
  return (
    <Form.Container>
      <Form.UmaColuna>
        <InputDefault
          register={register}
          name="nome_completo"
          label="Nome Completo"
          placeholder="Digite o nome"
        />
      </Form.UmaColuna>
      <Form.DuasColuna>
        <InputDefault
          register={register}
          name="login"
          label="Login"
          placeholder="Digite o login"
        />

        <CelularInput
          control={control}
          register={register}
          name="telefone"
          label="Celular"
          placeholder="Digite o Celular"
        />
      </Form.DuasColuna>
      <Form.FlexColuna>
        <InputDefault
          requirido={false}
          register={register}
          name="email"
          label="E-mail"
          placeholder="Digite o email"
        />
      </Form.FlexColuna>
      <footer>
        <Button secondary onClick={() => navigate(-1)}>
          <BsArrowLeftCircleFill size={20} />
          <p>Voltar</p>
        </Button>
      </footer>
    </Form.Container>
  );
};
