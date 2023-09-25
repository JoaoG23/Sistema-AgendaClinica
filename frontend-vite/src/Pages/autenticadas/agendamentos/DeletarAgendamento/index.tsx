import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { deletarAgendamentoPorId } from "./api";

import { navegarAtePaginaDepoisTempo } from "../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { ModalCarregando } from "../../../../Components/Modais/ModalCarregando";
import { DeletarModal } from "../../../../Components/Modais/DeletarModal";
import { ModalSucesso } from "../../../../Components/Modais/ModalSucesso";

export const DeletarAgendamento: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [modalPrincipal, setModalPrincipal] = useState<boolean>(true);

  const { id } = useParams();
  const { mutate, isLoading, isSuccess } = useMutation(
    async () => await deletarAgendamentoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Ops!: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-agendamentos");
        queryClient.invalidateQueries("listar-agendamentos-por-pagina");
        setModalPrincipal(false);
        navegarAtePaginaDepoisTempo(navigate, "/agendamentos");
      },
    }
  );

  return (
    <main>
      {isSuccess && <ModalSucesso />}
      {modalPrincipal && (
        <DeletarModal
          confirmar={async () => await mutate()}
          negar={() => navigate("/agendamentos")}
          carregamento={isLoading}
        />
      )}
    </main>
  );
};
