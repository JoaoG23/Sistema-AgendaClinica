import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { AdicionarAgendamento } from "../../../Pages/autenticadas/agendamentos/AdicionarAgendamento";

import { Agendamentos } from "../../../Pages/autenticadas/agendamentos/Agenda";
import { EditarAgendamento } from "../../../Pages/autenticadas/agendamentos/EditarAgendamento";
import { VisualizarAgendamento } from "../../../Pages/autenticadas/agendamentos/VisualizarAgendamentos";
import { DeletarAgendamento } from "../../../Pages/autenticadas/agendamentos/DeletarAgendamento";

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
      <Route
        path="/agendamentos/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarAgendamento />
          </PrivateRoute>
        }
      />
      <Route
        path="/agendamentos/visualizar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <VisualizarAgendamento />
          </PrivateRoute>
        }
      />
      <Route
        path="/agendamentos/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarAgendamento />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
