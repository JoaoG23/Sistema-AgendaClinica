import { Label, TextInput } from "flowbite-react";
import React from "react";

import { FieldValues, UseFormRegister } from "react-hook-form";

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
  color?: 'failure'
};

export const InputDefault: React.FC<Props> = ({
  defaultValue,
  label,
  name,
  type,
  placeholder,
  register,
  maxSize,
  disabled = false,
  required = true,
  color,
}) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={label} value={label} />
      </div>
      <TextInput
        id={label}
        sizing={"md"}
        disabled={disabled}
        placeholder={placeholder}
        maxLength={maxSize}
        defaultValue={defaultValue}
        {...register(name, { required: required })}
        type={type}
        color={color}
      />
    </div>
  );
};
