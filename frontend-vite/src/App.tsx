import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { BsList } from "react-icons/bs";

import { AutenticadasRotas } from "./Routers/AutenticadasRotas";

import "react-toastify/dist/ReactToastify.css";

// import contasPessoas from "./assets/contas.svg";

import InicialRouters from "./Routers/InicialRouters";

import GlobalStyle from "./themes/global";

import { Body, BotaoPorCima } from "./styles";

import { Sidebar } from "./Components/Navs/Sidebar";
import { Header } from "./Components/Navs/Header";

import { MobileSidebar } from "./Components/Navs/MobileSidebar";
import { Button } from "./Components/Buttons/Button";

const queryClient = new QueryClient();

function App() {
  const [mostrarSidebar, setMostrarSidebar] = useState<boolean>(false);
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <ToastContainer></ToastContainer>
        <>
          {/* <IconFundo1Flutuante src={contasPessoas} alt="fundo" /> */}
          <GlobalStyle />
          <Router>
            <Header />
            <Sidebar />
            <BotaoPorCima>
              <Button onClick={() => setMostrarSidebar(true)}>
                <BsList size={27} />
              </Button>
            </BotaoPorCima>
            <MobileSidebar
              setMostrarSidebar={setMostrarSidebar}
              mostrarSidebar={mostrarSidebar}
            />
            <Body>
              <AutenticadasRotas />
            </Body>
            <InicialRouters />
          </Router>
        </>
      </>
    </QueryClientProvider>
  );
}

export default App;
