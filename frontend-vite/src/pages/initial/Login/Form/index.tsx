import { Card } from "flowbite-react";
import { AxiosResponse } from "axios";
import React from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { authUser } from "../api/authUser";

import { FieldsForm } from "./FieldsForm";
import { TitleLarge } from "../../../../components/texts/titles/TitleLarge";

import { navigateToPageAfterSelectedTime } from "../../../../utils/navigation-page/navigateToPageAfterSelectedTime/navigateToPageAfterSelectedTime";

import { ErroResponse } from "../../../../types/authentication/ErroResponse";
import { UserLogin } from "../../../../types/authentication/UserLogin";

export const Form: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    async (userLogin: UserLogin) => await authUser(userLogin),
    {
      onError: (error: ErroResponse) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: (success: AxiosResponse) => {
        toast.success("Login Realizado com sucesso");
        navigateToPageAfterSelectedTime(navigate, "/logged/contas");
      },
    }
  );
  return (
    <Card className="w-screen p-0 lg:p-3 lg:w-96 h-96 ">
      <div className="flex justify-between items-center">
        <TitleLarge>Login</TitleLarge>
        <Link to={"/register"} className="text-purple-500 text-sm">
          Você ainda não tem conta?
        </Link>
      </div>
      <FieldsForm
        onSubmit={(user: UserLogin) => {
          mutate(user);
        }}
        isLoading={isLoading}
      />
      <Link to={""} className="text-sm  text-blue-500 text-center">
        Esqueci minha senha?
      </Link>
    </Card>
  );
};
