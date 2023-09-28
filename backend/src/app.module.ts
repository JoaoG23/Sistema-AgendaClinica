import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { ClientesModule } from './clientes/clientes.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { TokenUsuariosModule } from './usuarios/token.usuarios/token.usuarios.module';

@Module({
  imports: [
    AuthModule,
    ClientesModule,
    ColaboradoresModule,
    AgendamentosModule,
    TokenUsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
