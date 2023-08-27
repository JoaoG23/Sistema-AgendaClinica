import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import * as Paginacao from "./styles";

type Props = {
  setPagina: any;
  pagina: number;
  totalPaginas: number;
  arrayElementos: any;
  quantidadeTotalItems?: number;
};

export const PaginacaoComum: React.FC<Props> = ({
  pagina,
  totalPaginas,
  setPagina,
  arrayElementos,
  quantidadeTotalItems = 0,
}) => {
  const criarTodosBotaoPaginar = (totalPaginas: number) => {
    let arrayBotoes: any = [];
    for (let i = 0; i < totalPaginas; i++) {
      arrayBotoes.push(
        <button key={i} onClick={() => setPagina(() => i + 1)}>
          {i + 1}
        </button>
      );
    }
    return arrayBotoes;
  };

  return (
    <Paginacao.Container>
      <button
        onClick={() =>
          setPagina((paginaAntiga: any) => Math.max(paginaAntiga - 1, 1))
        }
        disabled={pagina === 1}
      >
        <IoIosArrowBack size={20} />
      </button>
      <Paginacao.NumeroPaginas>
        {criarTodosBotaoPaginar(totalPaginas)}
      </Paginacao.NumeroPaginas>
      <div>
        {pagina} até {totalPaginas} Qtd de items:{" "}
        <strong>{quantidadeTotalItems}</strong>
      </div>
      <button
        onClick={() => setPagina((paginaAntiga: any) => paginaAntiga + 1)}
        disabled={pagina >= totalPaginas}
      >
        <IoIosArrowForward size={20} />
      </button>
    </Paginacao.Container>
  );
};
