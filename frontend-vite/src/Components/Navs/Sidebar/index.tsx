import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCalendarEventFill, BsFillGrid3X2GapFill } from "react-icons/bs";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { AiFillCalendar, AiFillPlusCircle } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { FaPeopleCarry } from "react-icons/fa";

import { Container, CabecalhoUsuario, Menu, DropDown } from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";
import { Button } from "../../Buttons/Button";


export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const tamanhoIcons: number = 24;
  return (
    <Container>
      <Menu>
        <CabecalhoUsuario>
          <BsFillCalendarEventFill size={30} />
          <p>Nome do Usuário</p>
        </CabecalhoUsuario>
        <li>
          <Button tipo="primary" onClick={() => navigate("agendamentos/adicionar")}>
            <p>Agende aqui</p>
            <AiFillPlusCircle size={15} />
          </Button>
        </li>
        <li>
          <MdOutlineEmojiPeople size={tamanhoIcons} />
          <Link to={"/clientes"}>
            <p>Clientes</p>
          </Link>
        </li>
        <li>
          <FaPeopleCarry size={tamanhoIcons} />
          <Link to={"/colaboradores"}>
            <p>Colaboradores</p>
          </Link>
        </li>
        <li>
          <AiFillCalendar size={tamanhoIcons} />
          <Link to={"/agendamentos"}>
            <p>Agendamentos</p>
          </Link>
        </li>

        <DropDown>
          <summary>
            <BsFillGrid3X2GapFill size={tamanhoIcons} />
            <p>Outros</p>
          </summary>
          <ul>
            {[
              {
                id: "w",
                descricao: "res",
              },
            ].map((paginas) => {
              return (
                <li key={paginas.id}>
                  <Link to={""}>{paginas.descricao}</Link>
                </li>
              );
            })}
          </ul>
        </DropDown>
        <li onClick={() => limparSessaoUsuario()}>
          <ImExit size={tamanhoIcons} />
          <Link to={""}>
            <p>Sair</p>
          </Link>
        </li>
      </Menu>
    </Container>
  );
};
