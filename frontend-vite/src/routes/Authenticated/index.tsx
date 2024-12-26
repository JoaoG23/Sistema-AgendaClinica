import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Authenticator/PrivateRouter";
import { Appointments } from "../../pages/Appointments";
import { Layout } from "../../layout";

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
