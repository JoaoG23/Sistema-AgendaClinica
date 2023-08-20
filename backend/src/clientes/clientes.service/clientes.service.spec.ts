import { Test, TestingModule } from '@nestjs/testing';
import { ClientesService } from './clientes.service';

describe('ClientesService', () => {
  let service: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ClientesService,
          useValue: {
            salvar: jest.fn(),
            buscarTodosPorPagina: jest.fn(),
            contarTodosPorCriterio: jest.fn(),
            buscarUmPorId: jest.fn(),
            editarUmPorId: jest.fn(),
            deletarUmPorId: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
