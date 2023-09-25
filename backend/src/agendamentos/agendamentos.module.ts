import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { AgendamentosController } from './agendamentos.controller/agendamentos.controller';

import { AgendamentosService } from './agendamentos.service/agendamentos.service';

import { AgendamentosRepositoriesInterface } from './interfaces/AgendamentosRepositoriesInterface';
import { AgendamentosRepositories } from './agendamentos.repositories/agendamentos.repositories';

import { ValidacaoAgendamentosService } from './agendamentos.service/validacao.agendamentos.services/ValidacaoAgendamentosServices';
import { ValidacaoAgendamentosServicesInterface } from './interfaces/ValidacaoAgendamentosServicesInterface';

@Module({
  controllers: [AgendamentosController],
  providers: [
    PrismaService,
    AgendamentosService,
    {
      provide: ValidacaoAgendamentosServicesInterface,
      useClass: ValidacaoAgendamentosService,
    },
    {
      provide: AgendamentosRepositoriesInterface,
      useClass: AgendamentosRepositories,
    },
  ],
})
export class AgendamentosModule {}
