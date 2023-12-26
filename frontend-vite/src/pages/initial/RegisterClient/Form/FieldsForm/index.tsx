import React, { useEffect, useState } from "react";
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
  nome: z.string().min(1, "Nome e sobrenome é obrigatório"),
  username: z.string().min(1, "Nome de usuário é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatório"),
  senha_confirmada: z
    .string()
    .min(1, "Senha confirmada é obrigatório")
    .optional(),
  email: z
    .string()
    .min(1, "E-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  telefone: z.string().min(1, "Telefone é obrigatório"),
});

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>;

export const FieldsForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
  });

  const [showLabelEqualTwoPassword, setshowLabelEqualTwoPassword] =
    useState(false);
  const [passwordConfirmated, password] = watch(["senha_confirmada", "senha"]);

  const renderLoadingOrRegisterButton = isLoading ? (
    <div className="text-center">
      <Spinner aria-label="Spinner button " size="md" />
    </div>
  ) : (
    <Button color="purple" type="submit">
      Registrar
      <FiLogIn className="h-5 w-5 ml-2" />
    </Button>
  );

  useEffect(() => {
    const isPasswordToBeEquals = passwordConfirmated === password;
    isPasswordToBeEquals
      ? setshowLabelEqualTwoPassword(false)
      : setshowLabelEqualTwoPassword(true);
  }, [passwordConfirmated, password]);

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <InputDefault
        name={"nome"}
        register={register}
        label="Nome e Sobrenome"
      />
      {errors.nome && <Badge color="failure">{errors.nome.message}</Badge>}

      <InputDefault name={"username"} register={register} label="Usuário" />
      {errors.username && (
        <Badge color="failure">{errors.username.message}</Badge>
      )}

      <InputDefault
        name={"senha"}
        type="password"
        register={register}
        label="Senha"
      />
      {errors.senha && <Badge color="failure">{errors.senha.message}</Badge>}

      <InputDefault
        type="password"
        name={"senha_confirmada"}
        register={register}
        label="Senha Confirmada"
      />
      {showLabelEqualTwoPassword && (
        <Badge color={"failure"}>As senhas não são iguais</Badge>
      )}

      <InputDefault name={"email"} register={register} label="E-mail" />
      {errors.email && <Badge color="failure">{errors.email.message}</Badge>}

      <InputDefault name={"telefone"} register={register} label="Telefone" />
      {errors.telefone && (
        <Badge color="failure">{errors.telefone.message}</Badge>
      )}

      {renderLoadingOrRegisterButton}
    </form>
  );
};
