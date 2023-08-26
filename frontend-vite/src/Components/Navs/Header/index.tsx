import React from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  BsFillCaretDownFill,
  BsFillChatLeftTextFill,
  BsJustify,
} from "react-icons/bs";

import { Container } from "./styles";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

export const Header: React.FC = () => {
  const { nomeUsuario } = buscaDadoUsuarioNaSessao();

  const navigate = useNavigate();
  function voltarPaginaAnterior() {
    navigate(-1);
  }
  return (
    <Container>
      <p>Agendamento</p>
      <div>
        <button>
          <BsFillChatLeftTextFill size={17} />
        </button>
        <button
          onClick={() => {
            voltarPaginaAnterior();
          }}
        >
          <img src=""></img>
          <p>Nome Usuário</p>
          <BsFillCaretDownFill size={17} />
        </button>
        <button>
          <BsJustify size={30} />
        </button>
      </div>
    </Container>
  );
};
