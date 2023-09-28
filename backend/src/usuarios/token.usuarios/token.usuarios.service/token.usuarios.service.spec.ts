import { Test, TestingModule } from '@nestjs/testing';
import { TokenUsuariosService } from './token.usuarios.service';

describe('TokenUsuariosService', () => {
  let provider: TokenUsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TokenUsuariosService],
    }).compile();

    provider = module.get<TokenUsuariosService>(TokenUsuariosService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
