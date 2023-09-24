import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosColaboradores } from "./api";

import * as Selects from "./styles";

import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";
import { ColaboradorVisualizado } from "../../../types/colaborador/colaboradorVisualizado";

type Props<T = unknown> = {
  label?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
  register: UseFormRegister<any> | Function;
  desativar?: boolean;
  requirido?: boolean;
  opcoes?: T[];
};

export const ColaboradoresSelect: React.FC<Props<ColaboradorVisualizado>> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,
  opcoes = [],
}) => {
  const { isLoading, data } = useQuery(
    "todos-colaboradores",
    buscarTodosColaboradores,
    {
      onError: (error: any) => {
        toast.error(`${error.response.data}`);
      },
    }
  );

  const colaboradores = data?.data || opcoes;

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <label>{label}</label>
      <Selects.Container
        aria-label="colaboradores"
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value="">Selecione um colaborador </option>
        {colaboradores?.map((option: ColaboradorVisualizado) => (
          <option key={option?.id} value={option?.id}>
            {option?.nome_completo}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
