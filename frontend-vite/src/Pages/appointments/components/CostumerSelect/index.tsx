import { Label, Select, Spinner } from "flowbite-react";

import { FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { getCostumers } from "./api/getCostumers";
import { toast } from "react-toastify";
import { ErroResponse } from "../../../../types/authentication/ErroResponse";
import { AxiosResponse } from "axios";

type Props = {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues> | any;
  maxSize?: number;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  color?: "failure";
};

export const CostumerSelect: React.FC<Props> = ({
  defaultValue,
  label,
  name,
  type,
  register,
  disabled = false,
  required = true,
}) => {
  const { data: costumerData, isLoading } = useQuery(
    "costumers",
    getCostumers,
    {
      onError: (error: ErroResponse) => {
        toast.error(`Ops! : ${error.response?.data?.message}`);
      },
    }
  );

  const renderLoadingOrLabel = isLoading ? (
    <div className="text-center">
      <Spinner aria-label="Spinner button " size="md" />
    </div>
  ) : (
    <div className="mb-2 block">
      <Label htmlFor={label} value={label} />
    </div>
  );

  const costumers: any[] = costumerData?.data || [];
  return (
    <div className="max-w-md">
      {renderLoadingOrLabel}
      <Select
        id={label}
        sizing={"md"}
        disabled={disabled}
        defaultValue={defaultValue}
        {...register(name, { required: required })}
        type={type}
      >
        {costumers.map((costumer) => (
          <option value={costumer.id}>{costumer?.nome_completo}</option>
        ))}
      </Select>
    </div>
  );
};
