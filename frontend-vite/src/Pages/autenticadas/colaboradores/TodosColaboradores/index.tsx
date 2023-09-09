import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

import { pesquisarColaboradoresPorCriteriosEPaginacao } from "./api";

import { SpinnerCarregamento } from "../../../../Components/spinners/SpinnerCarregamento";

import { PaginacaoComum } from "../../../../Components/paginacoes/Paginacao";
import { CardList } from "../../../../Components/cards/CardList";
import { Card } from "../../../../Components/cards/Card";

import * as Fluxo from "./styles";

import { FormularioPesquisa } from "../ComponentesParaTodos/campos/FormularioPesquisa";

import { ColaboradorPesquisado } from "../../../../types/colaborador/ColaboradorPesquisado";
import { ColaboradorVisualizado } from "../../../../types/colaborador/colaboradorVisualizado";

import { ListaColaboradores } from "../ComponentesParaTodos/tabela/Linha/Linha";

export const TodosColaboradores: React.FC = () => {
  const [pagina, setPagina] = useState<number>(1);
  const [criteriosBusca, setCriteriosBusca] = useState<ColaboradorPesquisado>(
    {}
  );
  const comecarPelaPrimeiraPagina = () => setPagina(1);

  const {
    data,
    mutate: mutatePesquisar,
    isLoading,
  } = useMutation(
    async () =>
      await pesquisarColaboradoresPorCriteriosEPaginacao(
        pagina,
        criteriosBusca
      ),
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

  const colaboradores: ColaboradorVisualizado[] = data?.data[1];
  const totalQuantidadePaginas = data?.data[0].totalQuantidadePaginas;
  const quantidadeTotalRegistros = data?.data[0].quantidadeTotalRegistros;

  return (
    <Fluxo.Container>
      {isLoading && <SpinnerCarregamento />}

      <Fluxo.Pesquisa>
        <Card>
          <FormularioPesquisa
            onSubmit={handleSubmit((criterios: ColaboradorPesquisado) => {
              setCriteriosBusca(criterios);
              mutatePesquisar();
              comecarPelaPrimeiraPagina();
            })}
            register={register}
          />
        </Card>
      </Fluxo.Pesquisa>
      <header>
        <h2>Seus Colaboradores</h2>
      </header>

      <CardList>
        {colaboradores?.map((colaborador: ColaboradorVisualizado) => (
          <ListaColaboradores key={colaborador.id} colaborador={colaborador} />
        ))}
      </CardList>

      <PaginacaoComum
        setPagina={setPagina}
        pagina={pagina}
        totalPaginas={totalQuantidadePaginas}
        arrayElementos={colaboradores}
        quantidadeTotalItems={quantidadeTotalRegistros}
      />
    </Fluxo.Container>
  );
};
