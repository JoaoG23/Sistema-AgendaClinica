import { Route, Routes } from "react-router-dom";

import { Login } from "../../Pages/initial/Login";
import { Registrar } from "../../Pages/initial/RegisterClient";

export const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registrar_cliente" element={<Registrar />}></Route>
    </Routes>
  );
};
