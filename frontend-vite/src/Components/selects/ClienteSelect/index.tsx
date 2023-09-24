import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { buscarTodosClientes } from "./api";

import * as Selects from "./styles";

import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";
import { ClienteVisualizado } from "../../../types/cliente/ClienteVisualizado";

type Props<T = unknown> = {
  label?: string;
  name: string;
  control?: Control<FieldValues> | undefined;
  register: UseFormRegister<any> | Function;
  desativar?: boolean;
  requirido?: boolean;
  opcoes?: T[];
};

export const ClientesSelect: React.FC<Props<ClienteVisualizado>> = ({
  label,
  name,
  register,
  desativar = false,
  requirido = true,
  opcoes = [],
}) => {
  const { isLoading, data } = useQuery("todos-clientes", buscarTodosClientes, {
    onError: (error: any) => {
      toast.error(`${error.response.data}`);
    },
  });

  const clientes = data?.data || opcoes;
  console.log("🚀 ~ file: index.tsx:37 ~ clientes:", clientes);

  return (
    <Selects.ContainerInput>
      {isLoading && <SpinnerCarregamento />}
      <strong>{label}</strong>
      <Selects.Container
        aria-label="clientes"
        {...register(name, { required: requirido })}
        disabled={desativar}
      >
        <option value="">Selecione um Cliente</option>
        {clientes?.map((option: ClienteVisualizado) => (
          <option key={option?.id} value={option?.id}>
            {option?.nome_completo}
          </option>
        ))}
      </Selects.Container>
    </Selects.ContainerInput>
  );
};
