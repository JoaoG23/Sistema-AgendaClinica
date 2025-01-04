import React from "react";
import { FieldValues, useForm, UseFormHandleSubmit } from "react-hook-form";
import { FaSave } from "react-icons/fa";

import { Badge, Button, Spinner } from "flowbite-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputDefault } from "../../../../components/inputs/InputDefault";
import { CostumerSelect } from "../../components/CostumerSelect";
import { EmployeeSelect } from "../../components/EmployeeSelect";

type Props = {
  onSubmit: UseFormHandleSubmit<FieldValues> | any;
  isLoading?: boolean;
};

const createAppointmentFormSchema = z.object({
  dataHoraInicio: z.string().min(1, "Horario de inicio é obrigatório"),
  dataHoraFim: z.string().min(1, "Horario de fim é obrigatório"),
  valor: z.string(),
  observacao: z.string(),
  clientesId: z.string().min(1, "Cliente deve ser selecionado"),
  colaboradoresId: z.string().min(1, "Colaboradores deve ser selecionado"),
});

type CreateAppointmentFormSchema = z.infer<typeof createAppointmentFormSchema>;

export const FieldsForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateAppointmentFormSchema>({
    resolver: zodResolver(createAppointmentFormSchema),
  });

  const renderLoadingOrAddButton = isLoading ? (
    <div className="text-center">
      <Spinner aria-label="Spinner button " size="md" />
    </div>
  ) : (
    <Button color="purple" type="submit">
      <FaSave className="h-5 w-5 mr-2" />
      Salvar o cadastro
    </Button>
  );

  return (
    <form className="p-2 grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <section className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div>
          <InputDefault
            type="datetime-local"
            name={"dataHoraInicio"}
            register={register}
            label="Horario de inicio"
          />
          {errors.dataHoraInicio && (
            <Badge color="failure">
              {errors.dataHoraInicio.message} &#10005;
            </Badge>
          )}
        </div>
        <div>
          <InputDefault
            type="datetime-local"
            name={"dataHoraFim"}
            register={register}
            label="Horario de inicio"
          />
          {errors.dataHoraFim && (
            <Badge color="failure">{errors.dataHoraFim.message} &#10005;</Badge>
          )}
        </div>
      </section>
      <section className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div>
          <CostumerSelect
            name={"clientesId"}
            register={register}
            label="Cliente"
          />
          {errors.clientesId && (
            <Badge color="failure">{errors.clientesId.message} &#10005;</Badge>
          )}
        </div>
        <div>
          <EmployeeSelect
            name={"colaboradoresId"}
            register={register}
            label="Colaborador"
          />
          {errors.colaboradoresId && (
            <Badge color="failure">
              {errors.colaboradoresId.message} &#10005;
            </Badge>
          )}
        </div>
      </section>
      <section>
        <div>
          <InputDefault
            name={"valor"}
            register={register}
            label="Valor"
            type="number"
          />
          {errors.valor && (
            <Badge color="failure">{errors.valor.message} &#10005;</Badge>
          )}
        </div>
        <div>
          <InputDefault
            name={"observacao"}
            register={register}
            label="Observação"
            required={false}
          />
        </div>
      </section>
      <div className="grid grid-cols-2 pt-2">{renderLoadingOrAddButton}</div>
    </form>
  );
};
