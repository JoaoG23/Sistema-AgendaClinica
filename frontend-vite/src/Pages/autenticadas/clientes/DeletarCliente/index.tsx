import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { deletarClientePorId } from "./api";

import { navegarAtePaginaDepoisTempo } from "../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { ModalSucesso } from "../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../Components/Modais/ModalCarregando";
import { DeletarModal } from "../../../../Components/Modais/DeletarModal";

export const DeletarCliente: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [modalPrincipal, setModalPrincipal] = useState<boolean>(true);

  const { id } = useParams();
  const { mutate, isLoading, isSuccess } = useMutation(
    async () => await deletarClientePorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-cliente");
        queryClient.invalidateQueries("listar-cliente-por-pagina");
        setModalPrincipal(false);
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  return (
    <main>
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
      {modalPrincipal && (
        <DeletarModal
          confirmar={async () => await mutate()}
          negar={() => navigate(-1)}
          carregamento={isLoading}
        />
      )}
    </main>
  );
};
