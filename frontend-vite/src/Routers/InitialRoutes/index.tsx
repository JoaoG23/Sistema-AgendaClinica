import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/initial/Login";


export const InitialRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};
