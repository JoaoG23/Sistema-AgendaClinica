import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller/usuarios.controller';

import { UsuariosService } from './usuarios.service/usuarios.service';

import { PrismaService } from 'src/database/prisma.service';

import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';
import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';

import { TokenUsuariosRepositoriesInterface } from '../token.usuarios/interfaces/TokenUsuariosRepositoriesInterface';
import { TokenUsuariosRepositories } from '../token.usuarios/token.usuarios.repositories/token.usuarios.repositories';

import { UsuariosRepositories } from './usuarios.repositories/usuarios.repositories';
import { UsuariosRepositoriesInterface } from './interfaces/UsuariosRepositoriesInterface';
@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [
    PrismaService,
    UsuariosService,
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
  exports: [UsuariosService],
})
export class UsuariosModule {}
