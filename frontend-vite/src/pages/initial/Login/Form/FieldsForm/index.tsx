import React from "react";
import { FieldValues, useForm, UseFormHandleSubmit } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import { Badge, Button } from "flowbite-react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { InputDefault } from "../../../../../components/inputs/InputDefault";

type Props = {
  onSubmit: UseFormHandleSubmit<FieldValues> | any;
};

const createUserFormSchema = z.object({
  login: z.string().min(1, "Usuário é obrigatório"),
  senha: z.string().min(1, "Senha é obrigatório"),
});

type CreateUserFormSchema = z.infer<typeof createUserFormSchema>;

export const FieldsForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
  });

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <InputDefault name={"login"} register={register} label="Usuário" />
      {errors.login && <Badge color="failure">Usuário vazio</Badge>}

      <InputDefault
        name={"senha"}
        type="password"
        register={register}
        label="Senha"
      />
      {errors.senha && <Badge color="failure">Senha vazia</Badge>}

      <Button color="purple" type="submit">
        Logar
        <FiLogIn className="h-5 w-5 ml-2" />
      </Button>
    </form>
  );
};
