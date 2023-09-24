import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ImSearch } from "react-icons/im";

import * as Form from "./styles";
import { InputDefault } from "../../../../../../Components/Inputs/InputDefault";
import { Button } from "../../../../../../Components/Buttons/Button";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: any;
  errors: any;
};

export const FormularioPesquisa: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
}) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <h2>Pesquisar um Cliente</h2>
      <Form.ContainerPesquisa>
        <InputDefault
          requirido={false}
          register={register}
          placeholder="Nome pesquisar"
          name="nome_completo"
        />
        <InputDefault
          requirido={false}
          register={register}
          placeholder="E-mail pesquisar"
          name="email"
        />

        <Button primary>
          <p>Pesquisar</p>
          <ImSearch color="#fff" size={20} />
        </Button>
      </Form.ContainerPesquisa>
    </Form.Container>
  );
};
