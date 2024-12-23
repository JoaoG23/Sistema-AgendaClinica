import { Route, Routes } from "react-router-dom";

import PrivateRoute from "../Authenticator/PrivateRouter";
import { Leftbar } from "../../components/Leftbar";

export const AuthenticatedRoutes = () => {
  return (
    <>
      <Leftbar/>

      <Routes>
        <Route
          path="/logged/appointments"
          element={
            <PrivateRoute redirectTo={"/"}>
              <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h1>LOGADO</h1> */}
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/usuario_logado/deletar/:id"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <DeletarUsuario />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/tipos_despesas"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <TodosTiposDespesa />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/agenda"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <Agenda />
              </Layout>
            </PrivateRoute>
          }
        /> */}
      </Routes>
      {/* <FluxocaixaRotas />
      <CategoriasRotas />
      <LocaisRotas />
      <ProgramacaoRotas /> */}
    </>
  );
};
