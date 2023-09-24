import React from "react";
import * as Modal from "./styles";

import carregamentoMoeda from "../../../assets/carregamentoImage.svg";

import { AnimationLoading } from "../../spinners/SpinnerCarregamento/styles";

export const ModalCarregando: React.FC = () => (
  <Modal.BackGround>
    <Modal.Body>
      <AnimationLoading src={carregamentoMoeda} alt="loading" />
      <h3>Carregando .... </h3>
    </Modal.Body>
  </Modal.BackGround>
);
