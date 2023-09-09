import { Module } from '@nestjs/common';
import { ColaboradoresController } from './colaboradores.controller/colaboradores.controller';

import { PrismaService } from 'src/database/prisma.service';

import { ColaboradoresRepositoriesInterface } from './interfaces/ColaboradoresRepositoriesInterface';
import { ColaboradoresRepositories } from './colaboradores.repositories/colaboradores.repositories';

import { UsuariosRepositoriesInterface } from 'src/usuarios/interfaces/UsuariosRepositoriesInterface';
import { UsuariosRepositories } from 'src/usuarios/usuarios.repositories/usuarios.repositories';
import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';
import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';
import { ColaboradoresService } from './colaboradores.service/colaboradores.service';

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
