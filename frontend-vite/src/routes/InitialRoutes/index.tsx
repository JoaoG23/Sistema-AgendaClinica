import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/initial/Login";
import { RegisterClient } from "../../pages/initial/RegisterClient";


export const InitialRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<RegisterClient />}></Route>
    </Routes>
  );
};
