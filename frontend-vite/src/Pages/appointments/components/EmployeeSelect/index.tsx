import { Label, Select, Spinner } from "flowbite-react";

import { FieldValues, UseFormRegister } from "react-hook-form";
import { useQuery } from "react-query";
import { getEmployee } from "./api/getEmployee";
import { toast } from "react-toastify";
import { ErroResponse } from "../../../../types/authentication/ErroResponse";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues> | any;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
};

export const EmployeeSelect: React.FC<Props> = ({
  defaultValue,
  label,
  name,
  type,
  register,
  disabled = false,
  required = true,
}) => {
  const { data: employeesData, isLoading } = useQuery("employee", getEmployee, {
    onError: (error: ErroResponse) => {
      toast.error(`Ops! : ${error.response?.data?.message}`);
    },
  });

  const renderLoadingOrLabel = isLoading ? (
    <div className="text-center">
      <Spinner aria-label="Spinner button " size="md" />
    </div>
  ) : (
    <div className="mb-2 block">
      <Label htmlFor={label} value={label} />
    </div>
  );

  const employees: any[] = employeesData?.data || [];
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
        {employees.map((employee) => (
          <option key={employee.id} value={employee?.id}>{employee?.nome_completo}</option>
        ))}
      </Select>
    </div>
  );
};
