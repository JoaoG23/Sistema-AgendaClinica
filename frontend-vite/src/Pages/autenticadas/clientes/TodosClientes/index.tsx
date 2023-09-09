import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { pesquisarClientesPorCriteriosEPaginacao } from "./api";

import { SpinnerCarregamento } from "../../../../Components/spinners/SpinnerCarregamento";

import { ClienteVisualizado } from "../../../../types/cliente/ClienteVisualizado";
import { ClientePesquisado } from "../../../../types/cliente/ClientePesquisado";

import { PaginacaoComum } from "../../../../Components/paginacoes/Paginacao";
import { ListaClientes } from "../ComponentesParaTodos/tabela/Linha/Linha";
import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";
import { CardList } from "../../../../Components/cards/CardList";
import { Card } from "../../../../Components/cards/Card";

import * as Fluxo from "./styles";

export const TodosClientes: React.FC = () => {
  const navigate = useNavigate();

  const [pagina, setPagina] = useState<number>(1);
  const [criteriosBusca, setCriteriosBusca] = useState<ClientePesquisado>({});
  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const {
    data,
    mutate: mutatePesquisar,
    isLoading,
  } = useMutation(
    async () =>
      await pesquisarClientesPorCriteriosEPaginacao(pagina, criteriosBusca),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    mutatePesquisar();
  }, [pagina, criteriosBusca]);

  const clientes = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}

      <Fluxo.Pesquisa>
        <Card>
          <FormularioPesquisa
            onSubmit={handleSubmit((criterios: ClientePesquisado) => {
              setCriteriosBusca(criterios);
              mutatePesquisar();
              comecarPelaPrimeiraPagina();
            })}
            register={register}
            control={control}
            errors={errors}
          />
        </Card>
      </Fluxo.Pesquisa>
      <header>
        <h2>Seus Clientes</h2>
      </header>

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
