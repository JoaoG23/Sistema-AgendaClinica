import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";

import { InitialRoutes } from "./routes/InitialRoutes";
import PrivateRoute from "./routes/Authenticator/PrivateRouter";

const queryClient = new QueryClient();

function App() {
  const [mostrarSidebar, setMostrarSidebar] = useState<boolean>(false);
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <ToastContainer></ToastContainer>
        <Router>
          <InitialRoutes />
          <Routes>
            <Route
              path="/logged/agendamentos"
              element={
                <PrivateRoute redirectTo="/">
                  <h2> OLA</h2>
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </>
    </QueryClientProvider>
  );
}

export default App;
