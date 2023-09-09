import React from "react";
import { QuestionamentoModal } from "../ModalQuestiomento";
import ButtonDefault from "../../Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";
import { Button } from "../../Buttons/Button";

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
          Sim{carregamento && ((<p>Carregando ...</p>) as any)}
        </Button>
        <Button secondary onClick={negar}>
          Não
        </Button>
      </div>
    </QuestionamentoModal>
  );
};
