import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";


import "react-toastify/dist/ReactToastify.css";

// import contasPessoas from "./assets/contas.svg";

import { InicialRouters } from "./Routers/InicialRouters";




const queryClient = new QueryClient();

function App() {
  const [mostrarSidebar, setMostrarSidebar] = useState<boolean>(false);
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <ToastContainer></ToastContainer>
        <>
          {/* <GlobalStyle /> */}
          <Router>
      
            <InicialRouters />
          </Router>
        </>
      </>
    </QueryClientProvider>
  );
}

export default App;
