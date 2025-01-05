import { Button, Modal, Spinner } from "flowbite-react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErroResponse } from "../../../types/authentication/ErroResponse";
import { navigateToPageAfterSelectedTime } from "../../../utils/navigation-page/navigateToPageAfterSelectedTime/navigateToPageAfterSelectedTime";
import { deleteAppointmentById } from "./api/deleteAppointmentById";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useEffect } from "react";

type Props = {
  idAppointment: string;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
};

export const DeleteAppointment: React.FC<Props> = ({
  idAppointment,
  openModal,
  setOpenModal,
}) => {
  const navigate = useNavigate();
  const { mutate, isLoading: isLoadingDelete } = useMutation(
    async () => await deleteAppointmentById(idAppointment),
    {
      onError: (error: ErroResponse) => {
        toast.error(`Ops! Houve um error: ${error.response?.data?.message}`);
      },
      onSuccess: () => {
        toast.success("Registro removido com sucesso!");
        navigateToPageAfterSelectedTime(navigate, 0, 1500);
      },
    }
  );

  const renderButtonsDeleteOrLoading = (loading: boolean) => {
    return loading ? (
      <Spinner aria-label="Delete loading appoiments" size="lg" />
    ) : (
      <div className="flex justify-center gap-4">
        <Button color="failure" onClick={() => mutate()}>
          Sim, Eu quero
        </Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Não, cancelar
        </Button>
      </div>
    );
  };
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Tem certeza que voce deseja remover este agendamento?
            </h3>
            {renderButtonsDeleteOrLoading(isLoadingDelete)}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
