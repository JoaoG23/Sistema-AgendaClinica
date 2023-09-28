import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller/clientes.controller';

import { ClientesService } from './clientes.service/clientes.service';

import { PrismaService } from 'src/database/prisma.service';

import { ClientesRepositories } from './clientes.repositories/clientes.repositories';
import { ClientesRepositoriesInterface } from './interfaces/ClientesRepositoriesInterface';

import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';
import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';

import { UsuariosRepositories } from 'src/usuarios/usuarios/usuarios.repositories/usuarios.repositories';
import { UsuariosRepositoriesInterface } from 'src/usuarios/usuarios/interfaces/UsuariosRepositoriesInterface';

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
