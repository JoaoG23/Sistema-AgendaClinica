import { Module } from '@nestjs/common';
import { ColaboradoresController } from './colaboradores.controller/colaboradores.controller';

import { PrismaService } from 'src/database/prisma.service';

import { ColaboradoresService } from './colaboradores.service/colaboradores.service';

import { CriptografiaBcrypt } from 'src/utils/criptografias/CriptografiaBcrypt/CriptografiaBcrypt';
import { CriptografiaBcryptInterface } from 'src/utils/criptografias/CriptografiaBcrypt/interfaces/CriptografiaBcryptInterface';

import { ColaboradoresRepositoriesInterface } from './interfaces/ColaboradoresRepositoriesInterface';
import { ColaboradoresRepositories } from './colaboradores.repositories/colaboradores.repositories';
import { UsuariosRepositoriesInterface } from 'src/usuarios/usuarios/interfaces/UsuariosRepositoriesInterface';
import { UsuariosRepositories } from 'src/usuarios/usuarios/usuarios.repositories/usuarios.repositories';
import { TokenUsuariosRepositoriesInterface } from 'src/usuarios/token.usuarios/interfaces/TokenUsuariosRepositoriesInterface';
import { TokenUsuariosRepositories } from 'src/usuarios/token.usuarios/token.usuarios.repositories/token.usuarios.repositories';

import { UsuariosServiceInterface } from 'src/usuarios/usuarios/interfaces/UsuarioServiceInterface';
import { UsuariosService } from 'src/usuarios/usuarios/usuarios.service/usuarios.service';

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
      provide: TokenUsuariosRepositoriesInterface,
      useClass: TokenUsuariosRepositories,
    },
    {
      provide: UsuariosServiceInterface,
      useClass: UsuariosService,
    },
    {
      provide: CriptografiaBcryptInterface,
      useClass: CriptografiaBcrypt,
    },
  ],
})
export class ColaboradoresModule {}
