import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarEventFill,
  BsFillGrid3X2GapFill,
  BsFillPersonVcardFill,
} from "react-icons/bs";
import { IoLogOut, IoPeopleSharp } from "react-icons/io5";

import {
  Container,
  CabecalhoUsuario,
  Menu,
  ItemMenu,
  ColecaoElementos,
  Elementos,
} from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";

export const Sidebar: React.FC = () => {
  const tamanhoIcons: number = 26;
  return (
    <Container>
      <CabecalhoUsuario>
        <BsFillCalendarEventFill size={40} />
        <p>Clinica</p>
      </CabecalhoUsuario>
      <Menu>
        <ItemMenu>
          <BsFillPersonVcardFill size={tamanhoIcons} />
          <Link to={"/contas"}>
            <p>Agenda</p>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <BsFillPersonVcardFill size={tamanhoIcons} />
          <Link to={"/contas"}>
            <p>Dashboard</p>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <BsFillPersonVcardFill size={tamanhoIcons} />
          <Link to={"/contas"}>
            <p>Dashboard</p>
          </Link>
        </ItemMenu>
        <ItemMenu>
          <BsFillPersonVcardFill size={tamanhoIcons} />
          <Link to={"/contas"}>
            <p>Usuário</p>
          </Link>
        </ItemMenu>
        <details>
          <ColecaoElementos>
            <BsFillGrid3X2GapFill />
            <p>Agenda</p>
          </ColecaoElementos>
          <Elementos>
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
          </Elementos>
        </details>
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
