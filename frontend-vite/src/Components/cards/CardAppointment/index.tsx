"use client";

import { Avatar, Button, Card } from "flowbite-react";
import { MdEdit } from "react-icons/md";
import { BsFillTrash2Fill } from "react-icons/bs";
export const CardAppointment: React.FC = () => {
  return (
    <Card className="max-w-sm rounded-xl	">
      <section className="flex items-center  gap-3">
        <Avatar rounded />
        <aside>
          <h5 className=" text-lg font-medium text-gray-900 dark:text-white">
            2023/09/29 10:00 - 11:00
          </h5>
          <h5 className="text-md font-medium text-gray-900 dark:text-white">
            Marilda Roberta Santos
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Corte + Pintura
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Andreia Roberta
          </p>
        </aside>
        <aside className="grid lg:gap-2 w-10 ">
          <Button color="purple">
            <MdEdit size={18} className="h-4" />
          </Button>
          <Button color="purple">
            <BsFillTrash2Fill size={18} className="h-4" />
          </Button>
        </aside>
      </section>
    </Card>
  );
};
