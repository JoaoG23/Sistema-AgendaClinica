import { Body, Controller, Post } from '@nestjs/common';

import { TokenUsuariosService } from '../token.usuarios.service/token.usuarios.service';
import { TokenValidadoDto } from '../token.usuarios.dto/TokenValidadoDto';

import { Public } from 'src/auth/constants/SetMetadata';
@Public()
@Controller('token')
export class TokenUsuariosController {
  constructor(private readonly tokenUsuariosService: TokenUsuariosService) {}

  @Post()
  async validarToken(@Body() token: TokenValidadoDto) {
    return await this.tokenUsuariosService.validarToken(token);
  }

  @Post('reenviar')
  async reenviarEmailToken(@Body() dadosToken) {
    const { email } = dadosToken;
    return await this.tokenUsuariosService.reenviarToken(email);
  }
}
