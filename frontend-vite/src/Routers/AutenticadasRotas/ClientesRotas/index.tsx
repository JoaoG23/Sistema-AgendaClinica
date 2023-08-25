import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";
import { TodosClientes } from "../../../Pages/autenticadas/clientes/TodosClientes";

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
      {/* <Route
        path="clientes/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="clientes/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarUsuario />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
};
