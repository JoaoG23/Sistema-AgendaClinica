import { useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { PaginationCustom } from "../../../components/paginations/PaginationCustom";
import { useQuery } from "react-query";
import { getAppointmentsByPage } from "./api";
import { toast } from "react-toastify";
import { PageCriteria } from "../../../types/PageCriteria";
import { Appointment } from "../types/Appointment";
import { CardAppointment } from "../../../components/cards/CardAppointment";
import { Button, Spinner } from "flowbite-react";
import { formatarDataHoraPadraoBR } from "../../../utils/formatadoresDatahora/formatarDataHoraPadraoBR/formatarDataHoraBR";
import { AddAppointment } from "../AddAppointment";

export const ListAppointments: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const itens = searchParams.get("itens");

  const [searchCriteria, setSearchCriteria] = useState<PageCriteria>({
    numero_pagina: 0,
    quantidade_items: 0,
  });

  useEffect(() => {
    const numero_pagina = Number(page ?? 1);
    const quantidade_items = Number(itens ?? 10);
    setSearchCriteria({ numero_pagina, quantidade_items });
  }, [page, itens]);

  const { data: appointmentsData, isLoading: isLoadingAppointments } = useQuery(
    ["appointments", searchCriteria],
    async () => await getAppointmentsByPage(searchCriteria),
    {
      onError: (error: any) => {
        toast.error(`Ops!: ${error.response?.data?.message}`);
      },
    }
  );
  const appointments: Array<Appointments> = appointmentsData?.data[1];
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold py-4 text-zinc-600">
          Agendamentos{" "}
          {isLoadingAppointments && (
            <Spinner color="purple" aria-label="loading appointments" />
          )}
        </h1>

        <AddAppointment />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
        {appointments?.map((appointment: Appointment) => (
          <CardAppointment
            id={appointment.id}
            key={appointment.id}
            dateStart={formatarDataHoraPadraoBR(
              appointment?.dataHoraInicio || ""
            )}
            costumer={appointment?.clientes?.nome_completo}
            procedure={"Teste"}
            professional={appointment?.colaboradores?.nome_completo}
          />
        ))}
      </div>

      <PaginationCustom
        currentPage={searchCriteria?.numero_pagina}
        totalPages={searchCriteria?.quantidade_items}
        onPageChange={(page: number) => {
          setSearchParams(
            `page=${page}&itens=${searchCriteria?.quantidade_items}`
          );
          setSearchCriteria({ ...searchCriteria, numero_pagina: page });
        }}
      />
    </section>
  );
};
