import { Card } from "flowbite-react";
import { AxiosResponse } from "axios";
import React from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { registerUserClient } from "../api/registerUserClient";

import { FieldsForm } from "./FieldsForm";
import { TitleLarge } from "../../../../components/texts/titles/TitleLarge";

import { navigateToPageAfterSelectedTime } from "../../../../utils/navigation-page/navigateToPageAfterSelectedTime/navigateToPageAfterSelectedTime";

import { ErroResponse } from "../../../../types/authentication/ErroResponse";
import { UserClientRegister } from "../../../../types/user/UserClientRegister";

export const Form: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    async (userLogin: UserClientRegister) =>
      await registerUserClient(userLogin),
    {
      onError: (error: ErroResponse) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        toast.success(
          "Usuário cadastrado! Você receberá um token em seu e-mail! Entre é ativo o seu usuário"
        );
        navigateToPageAfterSelectedTime(navigate, "/validar_token");
      },
    }
  );

  return (
    <Card className="w-screen p-0 lg:p-3 lg:w-96 ">
      <div className="flex justify-between items-center">
        <TitleLarge>Registrar Cliente</TitleLarge>
        <Link to={"/"} className="text-purple-500 text-sm">
          Deseja se logar?
        </Link>
      </div>
      <FieldsForm
        onSubmit={(user: UserClientRegister) => {
          delete user?.senha_confirmada;
          mutate(user);
        }}
        isLoading={isLoading}
      />
    </Card>
  );
};
