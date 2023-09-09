import React from "react";
import {
  Box,
  Container,
  SwitchContainer,
  SwitchInput,
  SwitchSlider,
} from "./styles";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegister<FieldValues> | any;
  valorPadrao?: string;
  desativar?: boolean;
  requirido?: boolean;
  descricao?: string;
  descricaoLigado?: string;
  descricaoDesligado?: string;
};

export const SwitchDefault: React.FC<Props> = ({
  valorPadrao,
  name,
  register,
  desativar = false,
  requirido = true,
  descricao,
}) => {
  return (
    <Box>
      <p>{descricao}</p>
      <Container>
        <SwitchContainer>
          <SwitchInput
            role="switch-default"
            type="checkbox"
            readOnly={desativar}
            defaultValue={valorPadrao}
            {...register(name, { required: requirido })}
          />
          <SwitchSlider />
        </SwitchContainer>
      </Container>
    </Box>
  );
};
