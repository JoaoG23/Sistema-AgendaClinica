import React from "react";
import { Box } from "../../components/others/Box";
import { CardAppointment } from "../../components/cards/CardAppointment";
import { PaginationCustom } from "../../components/paginations/PaginationCustom";

export const Appointments: React.FC = () => {
  return (
    <div className="p-10 sm:ml-64 lg:pt-16 lg:pl-16 lg:pr-16">
      <h1 className="text-2xl font-semibold py-4 text-zinc-600">
        Agendamentos
      </h1>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
        <CardAppointment></CardAppointment>
        <CardAppointment></CardAppointment>
        <CardAppointment></CardAppointment>
        <CardAppointment></CardAppointment>
        <CardAppointment></CardAppointment>
        <CardAppointment></CardAppointment>
        <CardAppointment></CardAppointment>
        <CardAppointment></CardAppointment>
        <CardAppointment></CardAppointment>
        {/* <Box>Teste</Box>
          <Box>Teste</Box>
          <Box>Teste</Box> */}
      </div>
      <PaginationCustom />
    </div>
  );
};
