import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill, BsCheckCircleFill } from "react-icons/bs";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { InputDefault } from "../../../../../../Components/Inputs/InputDefault";
import { AlertCampoVazio } from "../../../../../../Components/alerts/AlertCampoVazio";
import { Button } from "../../../../../../Components/Buttons/Button";
import { CelularInput } from "../../../../../../Components/Inputs/CelularInput";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: any;
  errors: any;
};

export const CamposFormulario: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
}) => {
  const navigate = useNavigate();
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <Form.UmaColuna>
        <InputDefault
          register={register}
          name="nome_completo"
          label="Nome Completo"
          placeholder="Digite o nome"
        />
        {errors?.nome_completo?.type === "required" && (
          <AlertCampoVazio mensagem="Nome vazio! Por gentileza preencher-o!" />
        )}
      </Form.UmaColuna>
      <Form.DuasColuna>
        <InputDefault
          register={register}
          name="login"
          label="Login"
          placeholder="Digite o login"
        />
        {errors?.login?.type === "required" && (
          <AlertCampoVazio mensagem="Login vazio! Por gentileza preencher-o!" />
        )}
        <CelularInput
          control={control}
          register={register}
          name="telefone"
          label="Celular"
          placeholder="Digite o Celular"
        />
        {errors?.telefone?.type === "required" && (
          <AlertCampoVazio mensagem="Celular vazio! Por gentileza preencher-o!" />
        )}
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
        <Button padrao onClick={() => navigate('/colaboradores')}>
          <BsArrowLeftCircleFill size={20} />
          <p>Voltar</p>
        </Button>
        <Button primary>
          <p>Salvar</p>
          <BsCheckCircleFill size={20} />
        </Button>
      </footer>
    </Form.Container>
  );
};
