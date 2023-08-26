import { useForm } from "react-hook-form";
import * as Fluxo from "./styles";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { listarTodosClientePorPagina } from "./api";

import { ErrorResposta } from "../../../../types/Respostas/ErrorResposta/ErroResposta";
import { SpinnerCarregamento } from "../../../../Components/spinners/SpinnerCarregamento";
import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";
import { CardList } from "../../../../Components/cards/CardList";
import { ClienteVisualizado } from "../../../../types/cliente/ClienteVisualizado";
import { PaginacaoComum } from "../../../../Components/paginacoes/Paginacao";
import { ListaClientes } from "../ComponentesParaTodos/tabela/Linha/Linha";
import { Button } from "../../../../Components/Buttons/Button";

export const TodosClientes: React.FC = () => {
  const navigate = useNavigate();
  const [pagina, setPagina] = useState<number>(1);
  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const { data, isLoading } = useQuery(
    ["pagina-cliente-pagina", pagina],
    () => listarTodosClientePorPagina(pagina),
    {
      onError: (error: ErrorResposta) => {
        toast.error(`Ops!: ${error.response?.data?.message}`);
      },
    }
  );

  useEffect(() => {}, [pagina]);

  const clientes = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}

      <Fluxo.Header>
        <h2>Seus Clientes</h2>
        <Fluxo.ContainerButtons>
          <Button padrao onClick={() => navigate("adicionar")}>
            <p>Adicionar</p>
            <IoMdAddCircle size={20} />
          </Button>
        </Fluxo.ContainerButtons>
      </Fluxo.Header>

      <CardList>
        {clientes?.map((cliente: ClienteVisualizado) => (
          <ListaClientes key={cliente.id} cliente={cliente} />
        ))}
      </CardList>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={clientes}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Fluxo.Container>
  );
};
