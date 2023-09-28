import { Test, TestingModule } from '@nestjs/testing';
import { TokenUsuariosController } from './token.usuarios.controller';

describe('TokenUsuariosController', () => {
  let controller: TokenUsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TokenUsuariosController],
    }).compile();

    controller = module.get<TokenUsuariosController>(TokenUsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
