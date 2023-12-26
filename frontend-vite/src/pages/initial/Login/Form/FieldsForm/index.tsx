import React from "react";
import { FieldValues, useForm, UseFormHandleSubmit } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { Badge, Button, Spinner } from "flowbite-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputDefault } from "../../../../../components/inputs/InputDefault";

type Props = {
  onSubmit: UseFormHandleSubmit<FieldValues> | any;
  isLoading?: boolean;
};

const createUserFormSchema = z.object({
  login: z.string().min(1, "Usuário é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatório"),
});

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>;

export const FieldsForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
  });

  const renderLoadingOrRegisterButton = isLoading ? (
    <div className="text-center">
      <Spinner aria-label="Spinner button " size="md" />
    </div>
  ) : (
    <Button color="purple" type="submit">
      Logar
      <FiLogIn className="h-5 w-5 ml-2" />
    </Button>
  );

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <InputDefault name={"login"} register={register} label="Usuário" />
      {errors.login && <Badge color="failure">{errors.login.message} &#10005;</Badge>}

      <InputDefault
        name={"senha"}
        type="password"
        register={register}
        label="Senha"
      />
      {errors.senha && <Badge color="failure">{errors.senha.message} &#10005;</Badge>}
      {renderLoadingOrRegisterButton}
    </form>
  );
};
