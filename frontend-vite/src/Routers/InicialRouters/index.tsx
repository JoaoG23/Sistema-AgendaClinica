import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import { RegistrarCliente } from "../../Pages/RegistrarCliente";

const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registrar_cliente" element={<RegistrarCliente />}></Route>
    </Routes>
  );
};

export default InicialRouters;
