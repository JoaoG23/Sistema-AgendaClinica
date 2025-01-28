import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Authenticator/PrivateRouter";
import { Layout } from "../../layout";

import { CalendarAppointments } from "../../pages/appointments/CalendarAppointments";

import { ListAppointments } from "../../pages/appointments/ListAppointments";
import { ListEmployees } from "../../pages/employee/ListEmployees";

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
          <Route
            path="employees"
            element={
              <PrivateRoute redirectTo={"/"}>
                <ListEmployees />
              </PrivateRoute>
            }
          />
          <Route
            path="calendar"
            element={
              <PrivateRoute redirectTo={"/"}>
                <CalendarAppointments />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
