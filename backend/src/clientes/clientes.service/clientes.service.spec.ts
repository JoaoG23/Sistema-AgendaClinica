import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';
import { ClientesRepositories } from '../clientes.repositories/clientes.repositories';
import { ClientesRepositoriesInterface } from '../interfaces/ClientesRepositoriesInterface';

const clientes = [
  { totalQuantidadePaginas: 1, quantidadeTotalRegistros: 2 },
  [
    { id: 1, nome_completo: 'Riveira Santos', isAtivado: true },
    { id: 2, nome_completo: 'Riveira Santos', isAtivado: true },
  ],
];

describe('ClientesService', () => {
  let service: ClientesService;
  let repository: ClientesRepositoriesInterface;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientesService,
        {
          provide: ClientesRepositories,
          useValue: {
            salvar: jest.fn(),
            deletarUmPorId: jest.fn(),
            editarUmPorId: jest.fn(),
            buscarUmPorId: jest.fn(),
            buscarTodosPorPagina: jest.fn().mockResolvedValue(clientes),
          },
        },
      ],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
    repository =
      module.get<ClientesRepositoriesInterface>(ClientesRepositories);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('buscarTodosPorPagina', () => {
    it('should be find all clientes for pages 1 and 2', async () => {
      const numeroPagina = 1;
      const quantidadeItemsPagina = 2;
      const resultado = await service.buscarTodosPorPagina(
        numeroPagina,
        quantidadeItemsPagina,
      );

      expect(resultado).toEqual(clientes);
    });
  });
  describe('validarNaoExisteId', () => {
    it('should be validate if client not exists his id dont have', async () => {
      const resultado = await service.validarNaoExisteId('id_cliente');

      expect(resultado).toEqual(undefined);
    });
  });
});
