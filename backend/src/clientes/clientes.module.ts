import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller/clientes.controller';

import { ClientesService } from './clientes.service/clientes.service';

import { PrismaService } from 'src/database/prisma.service';

import { ClientesRepositories } from './clientes.repositories/clientes.repositories';
import { ClientesRepositoriesInterface } from './interfaces/ClientesRepositoriesInterface';

@Module({
  controllers: [ClientesController],
  providers: [
    PrismaService,
    ClientesService,
    {
      provide: ClientesRepositoriesInterface,
      useClass: ClientesRepositories,
    },
  ],
})
export class ClientesModule {}
