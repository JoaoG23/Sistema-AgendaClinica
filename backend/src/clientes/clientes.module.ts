import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller/clientes.controller';

import { ClientesService } from './clientes.service/clientes.service';

import { PrismaService } from 'src/database/prisma.service';

import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';
import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';

import { UsuariosServiceInterface } from 'src/usuarios/usuarios/interfaces/UsuarioServiceInterface';
import { UsuariosService } from 'src/usuarios/usuarios/usuarios.service/usuarios.service';

import { ClientesRepositories } from './clientes.repositories/clientes.repositories';
import { ClientesRepositoriesInterface } from './interfaces/ClientesRepositoriesInterface';
import { UsuariosRepositoriesInterface } from 'src/usuarios/usuarios/interfaces/UsuariosRepositoriesInterface';
import { UsuariosRepositories } from 'src/usuarios/usuarios/usuarios.repositories/usuarios.repositories';
import { TokenUsuariosRepositoriesInterface } from 'src/usuarios/token.usuarios/interfaces/TokenUsuariosRepositoriesInterface';
import { TokenUsuariosRepositories } from 'src/usuarios/token.usuarios/token.usuarios.repositories/token.usuarios.repositories';

@Module({
  controllers: [ClientesController],
  providers: [
    PrismaService,
    ClientesService,
    {
      provide: ClientesRepositoriesInterface,
      useClass: ClientesRepositories,
    },
    {
      provide: UsuariosServiceInterface,
      useClass: UsuariosService,
    },
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
export class ClientesModule {}
