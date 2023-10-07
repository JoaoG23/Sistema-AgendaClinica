import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { TokenUsuariosController } from './token.usuarios.controller/token.usuarios.controller';

import { TokenUsuariosService } from './token.usuarios.service/token.usuarios.service';

import { TokenUsuariosRepositoriesInterface } from './interfaces/TokenUsuariosRepositoriesInterface';
import { TokenUsuariosRepositories } from './token.usuarios.repositories/token.usuarios.repositories';
import { UsuariosRepositoriesInterface } from '../usuarios/interfaces/UsuariosRepositoriesInterface';
import { UsuariosRepositories } from '../usuarios/usuarios.repositories/usuarios.repositories';

import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';
import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';

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
    {
      provide: UsuariosRepositoriesInterface,
      useClass: UsuariosRepositories,
    },
    {
      provide: CriptografiaBcryptInterface,
      useClass: CriptografiaBcrypt,
    },
  ],
})
export class TokenUsuariosModule {}
