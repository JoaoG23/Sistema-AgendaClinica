import { Avatar, Button, Card } from "flowbite-react";
import { MdEdit } from "react-icons/md";
import { BsFillTrash2Fill } from "react-icons/bs";
import { UpdateAppointment } from "../../../pages/appointments/UpdateAppointment";
import { useState } from "react";

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
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <UpdateAppointment
        id={id}
        openModal={openModal}
        setOpenModal={setOpenModal}
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
            <Button color="purple" pill onClick={() => setOpenModal(true)}>
              <MdEdit size={18} className="h-4" />
            </Button>
            <Button color="purple" pill>
              <BsFillTrash2Fill size={18} className="h-4" />
            </Button>
          </aside>
        </section>
      </Card>
    </>
  );
};
