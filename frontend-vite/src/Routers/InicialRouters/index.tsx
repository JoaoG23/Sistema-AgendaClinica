import { Route, Routes } from "react-router-dom";
import { Login } from "../../Pages/Login/Login";

export const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/nova" element={<Login />}></Route>
    </Routes>
  );
};

