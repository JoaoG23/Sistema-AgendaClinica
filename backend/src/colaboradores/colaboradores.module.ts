import { Module } from '@nestjs/common';
import { ColaboradoresController } from './colaboradores.controller/colaboradores.controller';

import { PrismaService } from 'src/database/prisma.service';

import { ColaboradoresRepositoriesInterface } from './interfaces/ColaboradoresRepositoriesInterface';
import { ColaboradoresRepositories } from './colaboradores.repositories/colaboradores.repositories';

import { ColaboradoresService } from './colaboradores.service/colaboradores.service';

import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';
import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';

import { UsuariosRepositoriesInterface } from 'src/usuarios/usuarios/interfaces/UsuariosRepositoriesInterface';
import { UsuariosRepositories } from 'src/usuarios/usuarios/usuarios.repositories/usuarios.repositories';

@Module({
  controllers: [ColaboradoresController],
  providers: [
    PrismaService,
    ColaboradoresService,
    {
      provide: ColaboradoresRepositoriesInterface,
      useClass: ColaboradoresRepositories,
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
export class ColaboradoresModule {}
