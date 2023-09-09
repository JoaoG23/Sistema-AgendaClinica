import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import { navegarAtePaginaDepoisTempo } from "../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { ModalCarregando } from "../../../../Components/Modais/ModalCarregando";
import { DeletarModal } from "../../../../Components/Modais/DeletarModal";

import { deletarColaboradorPorId } from "./api";

export const DeletarColaborador: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [modalPrincipal, setModalPrincipal] = useState<boolean>(true);

  const { id } = useParams();
  const { mutate, isLoading } = useMutation(
    async () => await deletarColaboradorPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-colaborador");
        queryClient.invalidateQueries("listar-colaborador-por-pagina");
        setModalPrincipal(false);
        toast.success(`Colaborador deletado com sucesso`);
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  return (
    <main>
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
