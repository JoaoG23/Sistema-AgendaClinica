import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarEventFill,
  BsFillGrid3X2GapFill,
  BsFillPersonVcardFill,
} from "react-icons/bs";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

import { Container, CabecalhoUsuario, Menu, DropDown } from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";
import { Button } from "../../Buttons/Button";
import { ImExit } from "react-icons/im";

export const Sidebar: React.FC = () => {
  const tamanhoIcons: number = 24;
  return (
    <Container>
      <Menu>
        <CabecalhoUsuario>
          <BsFillCalendarEventFill size={30} />
          <p>Nome do Usuário</p>
        </CabecalhoUsuario>
        <li>
          <Button primary={true}>
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
          <BsFillPersonVcardFill size={tamanhoIcons} />
          <Link to={"/contas"}>
            <p>Usuário</p>
          </Link>
        </li>

        <DropDown>
          <summary>
            <BsFillGrid3X2GapFill size={tamanhoIcons} />
            <p>Agenda</p>
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
        <li onClick={limparSessaoUsuario}>
          <ImExit size={tamanhoIcons} />
          <Link to={"/"}>
            <p>Sair</p>
          </Link>
        </li>
        {/* <SideBar.Item>
        <IoPeopleSharp color="#fff" size={40} />
        <Link to={"/usuarios"}>
        <p>Usuários</p>
        </Link>
        </SideBar.Item>
        <SideBar.Item onClick={limparSessaoUsuario}>
        <IoLogOut color="#fff" size={40} />
        <Link to={"/"}>
        <p>Sair</p>
        </Link>
      </SideBar.Item> */}
      </Menu>
    </Container>
  );
};
