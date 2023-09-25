import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill, BsCheckCircleFill } from "react-icons/bs";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { InputDefault } from "../../../../../../Components/Inputs/InputDefault";
import { AlertCampoVazio } from "../../../../../../Components/alerts/AlertCampoVazio";
import { Button } from "../../../../../../Components/Buttons/Button";
import { CelularInput } from "../../../../../../Components/Inputs/CelularInput";
import { ClientesSelect } from "../../../../../../Components/selects/ClienteSelect";
import { ColaboradoresSelect } from "../../../../../../Components/selects/ColaboradorSelect";
import { TextAreaDefault } from "../../../../../../Components/Inputs/TextAreaDefault";

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
      <Form.DuasColuna>
        <InputDefault
          type="datetime-local"
          register={register}
          name="dataHoraInicio"
          label="Data e Hora de Inicio"
          placeholder="Digite o Data e Hora de Inicio"
        />
        {errors?.dataHoraInicio?.type === "required" && (
          <AlertCampoVazio mensagem="Data e Hora de Inicio vazio! Por gentileza preencher-o!" />
        )}
        <InputDefault
          type="datetime-local"
          register={register}
          name="dataHoraFim"
          label="Data e Hora de Fim"
          placeholder="Digite o Data e Hora de Fim"
        />
        {errors?.dataHoraFim?.type === "required" && (
          <AlertCampoVazio mensagem="Data e Hora de Fim vazio! Por gentileza preencher-o!" />
        )}
      </Form.DuasColuna>

      <Form.UmaColuna>
        <InputDefault
          register={register}
          type="number"
          name="valor"
          label="Valor do Serviço"
          placeholder="Digite o Valor do Serviço"
        />
        {errors?.valor?.type === "required" && (
          <AlertCampoVazio mensagem="Valor do Serviço vazio! Por gentileza preencher-o!" />
        )}
      </Form.UmaColuna>

      <Form.DuasColuna>
        <ClientesSelect register={register} name="clientesId" label="Cliente" />
        {errors?.clientesId?.type === "required" && (
          <AlertCampoVazio mensagem="Cliente vazio! Por gentileza preencher-o!" />
        )}
        <ColaboradoresSelect
          register={register}
          name="colaboradoresId"
          label="Colaboradores"
        />
        {errors?.colaboradoresId?.type === "required" && (
          <AlertCampoVazio mensagem="Colaborador vazio! Por gentileza preencher-o!" />
        )}
      </Form.DuasColuna>

      <Form.UmaColuna>
        <TextAreaDefault
          register={register}
          name="observacao"
          label="Observação"
          placeholder="Digite o Observação"
        />
        {errors?.observacao?.type === "required" && (
          <AlertCampoVazio mensagem="Observação vazio! Por gentileza preencher-o!" />
        )}
      </Form.UmaColuna>

      <footer>
        <Button padrao onClick={() => navigate("/agendamentos")}>
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
