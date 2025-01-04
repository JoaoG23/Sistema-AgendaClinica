import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Authenticator/PrivateRouter";
import { ListAppointments } from "../../pages/appointments/ListAppointments";
import { Layout } from "../../layout";
import { AddAppointment } from "../../pages/appointments/AddAppointment";

export const AuthenticatedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/logged" element={<Layout />}>
          <Route
            path="appointments"
            element={
              <PrivateRoute redirectTo={"/"}>
                <ListAppointments />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
