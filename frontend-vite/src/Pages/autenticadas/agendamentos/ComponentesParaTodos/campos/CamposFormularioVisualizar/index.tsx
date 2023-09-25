import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { InputDefault } from "../../../../../../Components/Inputs/InputDefault";
import { Button } from "../../../../../../Components/Buttons/Button";
import { TextAreaDefault } from "../../../../../../Components/Inputs/TextAreaDefault";
import { ClientesSelect } from "../../../../../../Components/selects/ClienteSelect";
import { ColaboradoresSelect } from "../../../../../../Components/selects/ColaboradorSelect";

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
      <Form.DuasColuna>
        <InputDefault
          type="datetime-local"
          register={register}
          name="dataHoraInicio"
          label="Data e Hora de Inicio"
          placeholder="Digite o Data e Hora de Inicio"
        />
        <InputDefault
          type="datetime-local"
          register={register}
          name="dataHoraFim"
          label="Data e Hora de Fim"
          placeholder="Digite o Data e Hora de Fim"
        />
      </Form.DuasColuna>

      <Form.UmaColuna>
        <InputDefault
          register={register}
          type="number"
          name="valor"
          label="Valor do Serviço"
          placeholder="Digite o Valor do Serviço"
        />
      </Form.UmaColuna>

      <Form.DuasColuna>
        <ClientesSelect register={register} name="clientesId" label="Cliente" />
        <ColaboradoresSelect
          register={register}
          name="colaboradoresId"
          label="Colaboradores"
        />
      </Form.DuasColuna>

      <Form.UmaColuna>
        <TextAreaDefault
          register={register}
          name="observacao"
          label="Observação"
          placeholder="Digite o Observação"
        />
      </Form.UmaColuna>
      <footer>
        <Button padrao onClick={() => navigate(-1)}>
          <BsArrowLeftCircleFill size={20} />
          <p>Voltar</p>
        </Button>
      </footer>
    </Form.Container>
  );
};
