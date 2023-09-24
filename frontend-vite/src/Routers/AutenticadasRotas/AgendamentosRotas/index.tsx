import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { AdicionarAgendamento } from "../../../Pages/autenticadas/agendamentos/AdicionarAgendamento";

import { Agendamentos } from "../../../Pages/autenticadas/agendamentos/Agenda";

export const AgendamentosRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/agendamentos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Agendamentos />
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
