import React from "react";
import { useNavigate, Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import {
  BsEnvelope,
  BsFillArrowRightCircleFill,
  BsFillCaretDownFill,
  BsJustify,
} from "react-icons/bs";

import {
  Container,
  Item,
  VoltarText,
  TextLimited,
  ItemsLadoDireito,
} from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

export const Header: React.FC = () => {
  const { nomeUsuario } = buscaDadoUsuarioNaSessao();

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1);
  }
  return (
    <Container>
      <p>Gcontas</p>
      <ItemsLadoDireito>
        <Item>
          <BsEnvelope size={17} />
        </Item>
        <Item
          onClick={() => {
            voltarPaginaAnterior();
          }}
        >
          <img src=""></img>
          <p>Nome Usuário</p>
          <BsFillCaretDownFill size={17} />
        </Item>
        <Item>
          <BsJustify size={30} />
        </Item>
      </ItemsLadoDireito>
    </Container>
  );
};
