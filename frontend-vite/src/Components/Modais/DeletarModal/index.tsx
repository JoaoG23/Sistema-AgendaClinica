import React from "react";
import { QuestionamentoModal } from "../ModalQuestiomento";
import { Button } from "../../Buttons/Button";
import { SpinnerCarregamento } from "../../spinners/SpinnerCarregamento";

type Props = {
  confirmar?: () => Promise<any>;
  negar?: () => any;
  carregamento?: boolean;
};

export const DeletarModal: React.FC<Props> = ({
  confirmar,
  negar,
  carregamento = false,
}) => {
  return (
    <QuestionamentoModal>
      <p>Você deseja deletar este elemento</p>
      <div>
        <Button primary onClick={confirmar}>
          Sim
        </Button>
        <Button padrao onClick={negar}>
          Não
        </Button>
      </div>
    </QuestionamentoModal>
  );
};
