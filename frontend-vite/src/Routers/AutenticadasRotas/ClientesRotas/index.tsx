import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";
import { TodosClientes } from "../../../Pages/autenticadas/clientes/TodosClientes";
import { EditarCliente } from "../../../Pages/autenticadas/clientes/EditarCliente";
import { VisualizarCliente } from "../../../Pages/autenticadas/clientes/VisualizarCliente";
import { DeletarCliente } from "../../../Pages/autenticadas/clientes/DeletarCliente";

export const ClientesRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/clientes"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodosClientes />
          </PrivateRoute>
        }
      />
      <Route
        path="clientes/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarCliente />
          </PrivateRoute>
        }
      />
      <Route
        path="clientes/visualizar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <VisualizarCliente />
          </PrivateRoute>
        }
      />
      <Route
        path="clientes/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarCliente />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
