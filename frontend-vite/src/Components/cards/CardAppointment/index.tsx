import { Avatar, Button, Card } from "flowbite-react";
import { MdEdit } from "react-icons/md";
import { BsFillTrash2Fill } from "react-icons/bs";
import { UpdateAppointment } from "../../../pages/appointments/UpdateAppointment";
import { useState } from "react";
import { DeleteAppointment } from "../../../pages/appointments/DeleteAppointment";
import { s } from "vitest/dist/types-e3c9754d";

type Props = {
  id: string;
  image?: string;
  dateStart?: string;
  dateEnd?: string;
  costumer?: string;
  procedure?: string;
  professional?: string;
  openModalUpdateAppointment?: () => void;
};

export const CardAppointment: React.FC<Props> = ({
  id,
  image,
  dateStart,
  dateEnd,
  costumer,
  procedure,
  professional,
}) => {
  const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  return (
    <>
      <UpdateAppointment
        idAppointment={id}
        openModal={openModalUpdate}
        setOpenModal={setOpenModalUpdate}
      />
      <DeleteAppointment
        idAppointment={id}
        openModal={openModalDelete}
        setOpenModal={setOpenModalDelete}
      />
      <Card className="max-w-sm rounded-3xl">
        <section className="flex justify-around gap-1">
          {image ? <Avatar img={image} rounded /> : <Avatar rounded />}
          <aside>
            <h5 className=" text-md font-medium text-gray-800 dark:text-white">
              {dateStart}
            </h5>
            <h5 className="text-md font-medium text-gray-800 dark:text-white">
              {costumer}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {procedure}
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {professional}
            </p>
          </aside>
          <aside className="grid lg:gap-2 w-10 ">
            <Button
              color="purple"
              pill
              onClick={() => setOpenModalUpdate(true)}
            >
              <MdEdit size={18} className="h-4" />
            </Button>
            <Button color="purple" pill>
              <BsFillTrash2Fill
                size={18}
                className="h-4"
                onClick={() => setOpenModalDelete(true)}
              />
            </Button>
          </aside>
        </section>
      </Card>
    </>
  );
};
