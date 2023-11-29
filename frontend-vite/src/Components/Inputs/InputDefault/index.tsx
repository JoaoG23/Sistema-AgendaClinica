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
}) => {
  return (
    <div className="grid gap-1">
      <label className="text-gray-500 font-medium text-base lg:text-base md:text-xl sm:text-xl md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        {label}
      </label>
      <input
        className="w-full h-8 border-b-2 py-4 px-1 lg:h-0 md:h-12 sm:h-12 border-purple-700 hover:border-yellow-500 duration-500 text-gray-600"
        readOnly={disabled}
        placeholder={placeholder}
        maxLength={maxSize}
        defaultValue={defaultValue}
        {...register(name, { required: required })}
        type={type}
      ></input>
    </div>
  );
};
