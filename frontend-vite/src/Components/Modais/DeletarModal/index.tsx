import React from "react";
import { QuestionamentoModal } from "../ModalQuestiomento";
import ButtonDefault from "../../Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";
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
      <div className="d-flex gap-1">
        <Button primary onClick={confirmar}>
          Sim{carregamento && ((<SpinnerCarregamento />) as any)}
        </Button>
        <Button secondary onClick={negar}>
          Não
        </Button>
      </div>
    </QuestionamentoModal>
  );
};
