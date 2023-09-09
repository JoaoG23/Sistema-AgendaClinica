import { Test, TestingModule } from '@nestjs/testing';
import { ClientesRepositories } from './colaboradores.repositories';

describe('ClientesRepositories', () => {
  let service: ClientesRepositories;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientesRepositories],
    }).compile();

    service = module.get<ClientesRepositories>(ClientesRepositories);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
