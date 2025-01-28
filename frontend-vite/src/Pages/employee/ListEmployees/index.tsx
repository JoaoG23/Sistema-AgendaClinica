import { Avatar, List, Spinner } from "flowbite-react";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { PaginationCustom } from "../../../components/paginations/PaginationCustom";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import { getEmployeesByPage } from "./api";
import { PageCriteria } from "../../../types/PageCriteria";
import { Employee } from "../types/Employee";

export const ListEmployees: React.FC = () => {
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

  const { data: employeesData, isLoading: isLoadingEmployees } = useQuery(
    ["employees", searchCriteria],
    async () => await getEmployeesByPage(searchCriteria),
    {
      onError: (error: any) => {
        toast.error(`Ops!: ${error.response?.data?.message}`);
      },
    }
  );
  const employees: Array<Employee> = employeesData?.data[1];
  return (
    <section>
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-semibold py-4 text-zinc-600">
          Agendamentos{" "}
          {isLoadingEmployees && (
            <Spinner color="purple" aria-label="loading employee" />
          )}
        </h1>
        {/* <AddAppointment /> */}
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3  h-[calc(100vh-300px)]">
        <List
          unstyled
          className="max-w-md divide-y  dark:divide-gray-700"
        >
          {employees?.map((employee: Employee) => (
            <List.Item className="pb-3 sm:pb-4 shadow-sm rounded-lg">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <Avatar
                  img="/images/people/profile-picture-1.jpg"
                  alt="Neil image"
                  rounded
                  size="sm"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {employee.nome_completo}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {employee.usuarios?.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                </div>
              </div>
            </List.Item>
          ))}
        </List>
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
