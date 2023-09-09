import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { TodosColaboradores } from "../../../Pages/autenticadas/colaboradores/TodosColaboradores";
import { EditarColaborador } from "../../../Pages/autenticadas/colaboradores/EditarColaborador";
import { VisualizarColaborador } from "../../../Pages/autenticadas/colaboradores/VisualizarColaborador";
import { DeletarColaborador } from "../../../Pages/autenticadas/colaboradores/DeletarColaborador";

export const ColaboradoresRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/colaboradores"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodosColaboradores />
          </PrivateRoute>
        }
      />
      <Route
        path="colaboradores/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarColaborador />
          </PrivateRoute>
        }
      />
      <Route
        path="colaboradores/visualizar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <VisualizarColaborador />
          </PrivateRoute>
        }
      />
      <Route
        path="colaboradores/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarColaborador />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
