import { Outlet, Route, Routes } from "react-router-dom";
import PrivateRoute from "../Authenticator/PrivateRouter";
import { Leftbar } from "../../components/others/Leftbar";
import { Header } from "../../components/others/Header";
import { Appointments } from "../../pages/Appointments";
import { FooterCustom } from "../../components/others/FooterCustom";
import { Layout } from "../../layout";

type Props = {
  children: React.ReactNode;
};

export const AuthenticatedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/logged" element={<Layout />}>
          <Route
            path="appointments"
            element={
              <PrivateRoute redirectTo={"/"}>
                <Appointments />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
