import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";

import { InitialRoutes } from "./routes/InitialRoutes";
import PrivateRoute from "./routes/Authenticator/PrivateRouter";
import { AuthenticatedRoutes } from "./routes/Authenticated";

const queryClient = new QueryClient();

function App() {
  const [mostrarSidebar, setMostrarSidebar] = useState<boolean>(false);
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <ToastContainer></ToastContainer>
        <Router>
          <InitialRoutes />
          <AuthenticatedRoutes />
        </Router>
      </>
    </QueryClientProvider>
  );
}

export default App;
