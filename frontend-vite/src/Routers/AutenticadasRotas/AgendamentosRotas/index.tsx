import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { TodosAgendamentos } from "../../../Pages/autenticadas/agendamentos";
import { AdicionarAgendamento } from "../../../Pages/autenticadas/agendamentos/AdicionarAgendamento";
export const AgendamentosRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/agendamentos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodosAgendamentos />
          </PrivateRoute>
        }
      />
      <Route
        path="/agendamentos/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarAgendamento />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
