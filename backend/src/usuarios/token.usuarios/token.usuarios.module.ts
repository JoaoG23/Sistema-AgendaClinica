import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { TokenUsuariosController } from './token.usuarios.controller/token.usuarios.controller';

import { TokenUsuariosService } from './token.usuarios.service/token.usuarios.service';

import { TokenUsuariosRepositoriesInterface } from './interfaces/TokenUsuariosRepositoriesInterface';
import { TokenUsuariosRepositories } from './token.usuarios.repositories/token.usuarios.repositories';

@Module({
  imports: [],
  controllers: [TokenUsuariosController],
  providers: [
    PrismaService,
    TokenUsuariosService,
    {
      provide: TokenUsuariosRepositoriesInterface,
      useClass: TokenUsuariosRepositories,
    },
  ],
})
export class TokenUsuariosModule {}
