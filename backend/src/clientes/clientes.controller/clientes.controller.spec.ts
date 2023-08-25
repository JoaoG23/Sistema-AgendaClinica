import { Test, TestingModule } from '@nestjs/testing';

import { ClientesController } from './clientes.controller';

import { ClientesService } from '../clientes.service/clientes.service';
import { VisualizarClientesDto } from '../clientes.dto/VisualizarClienteDto';
import { CriarClienteDto } from '../clientes.dto/ClienteCriadoDto';

const clientes = [
  { totalQuantidadePaginas: 1, quantidadeTotalRegistros: 2 },
  [
    { id: 1, nome_completo: 'Riveira Santos', isAtivado: true },
    { id: 2, nome_completo: 'Riveira Santos', isAtivado: true },
  ],
];

const umCliente = clientes[1][0];
const newClienteEntity: VisualizarClientesDto = {
  id: 2,
  nome_completo: 'Novo cliente',
  isAtivado: true,
};

const updateClienteEntity: VisualizarClientesDto = {
  id: 2,
  nome_completo: 'Cliente editado',
  isAtivado: false,
};

describe('ClientesController', () => {
  let controller: ClientesController;
  let services: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientesController],
      providers: [
        {
          provide: ClientesService,
          useValue: {
            criarUm: jest.fn().mockResolvedValue(newClienteEntity),
            deletarUmPorId: jest.fn().mockResolvedValue(newClienteEntity),
            editarUmPorId: jest.fn().mockResolvedValue(updateClienteEntity),
            buscarUmPorId: jest.fn().mockResolvedValue(umCliente),
            buscarTodosPorPagina: jest.fn().mockResolvedValue(clientes),
          },
        },
      ],
    }).compile();

    controller = module.get<ClientesController>(ClientesController);
    services = module.get<ClientesService>(ClientesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(services).toBeDefined();
  });

  describe('buscarTodosPorPagina', () => {
    it('should be find all clients for pages 1 and 2', async () => {
      const numeroPagina = 1;
      const quantidadeItemsPagina = 2;
      const resultado = await controller.buscarTodosPorPagina(
        numeroPagina,
        quantidadeItemsPagina,
      );

      expect(resultado).toEqual(clientes);
    });

    it('should throw an exception', async () => {
      jest
        .spyOn(services, 'buscarTodosPorPagina')
        .mockResolvedValueOnce(new Error());

      expect(controller.buscarTodosPorPagina).rejects.toThrowError();
    });
  });

  describe('buscarUmPorId', () => {
    it('should show one cliente for your id', async () => {
      const resultado = await controller.buscarUmPorId('1111');

      const clienteExpect = clientes[1][0];
      expect(resultado).toEqual(clienteExpect);
      expect(services.buscarUmPorId).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', async () => {
      jest.spyOn(services, 'buscarUmPorId').mockResolvedValueOnce(new Error());

      expect(controller.buscarUmPorId).rejects.toThrowError();
    });
  });

  describe('criarUm', () => {
    it('should create a new cliente successfully', async () => {
      const body: CriarClienteDto = {
        nome_completo: 'Novo cliente',
        isAtivado: true,
      };

      const resultado = await controller.criarUm(body);

      expect(resultado).toEqual(newClienteEntity);
      expect(services.criarUm).toHaveBeenCalledWith(body);
      expect(services.criarUm).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', async () => {
      jest.spyOn(services, 'criarUm').mockResolvedValueOnce(new Error());

      expect(controller.criarUm).rejects.toThrowError();
    });
  });

  describe('editarUmPorId', () => {
    it('should update a cliente for id successfully', async () => {
      const body: CriarClienteDto = {
        nome_completo: 'Cliente editado',
        isAtivado: false,
      };
      const resultado = await controller.editarUmPorId('1', body);

      expect(resultado).toEqual(updateClienteEntity);

      expect(services.editarUmPorId).toHaveBeenCalledTimes(1);
      expect(services.editarUmPorId).toHaveBeenCalledWith('1', body);
    });

    it('should throw an exception', async () => {
      jest.spyOn(services, 'editarUmPorId').mockResolvedValueOnce(new Error());

      expect(controller.editarUmPorId).rejects.toThrowError();
    });
  });

  describe('deletarUmPorId', () => {
    it('should delete a cliente for id successfully', async () => {
      const resultado = await controller.deletarUmPorId('1');

      expect(resultado).toEqual(newClienteEntity);

      expect(services.deletarUmPorId).toHaveBeenCalledTimes(1);
      expect(services.deletarUmPorId).toHaveBeenCalledWith('1');
    });

    it('should throw an exception', async () => {
      jest.spyOn(services, 'deletarUmPorId').mockResolvedValueOnce(new Error());

      expect(controller.deletarUmPorId).rejects.toThrowError();
    });
  });
});
