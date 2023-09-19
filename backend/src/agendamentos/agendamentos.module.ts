import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { AgendamentosController } from './agendamentos.controller/agendamentos.controller';

import { AgendamentosService } from './agendamentos.service/agendamentos.service';

import { AgendamentosRepositoriesInterface } from './interfaces/AgendamentosRepositoriesInterface';
import { AgendamentosRepositories } from './agendamentos.repositories/agendamentos.repositories';

@Module({
  controllers: [AgendamentosController],
  providers: [
    PrismaService,
    AgendamentosService,
    {
      provide: AgendamentosRepositoriesInterface,
      useClass: AgendamentosRepositories,
    },
  ],
})
export class AgendamentosModule {}
