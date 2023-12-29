import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../auth.service';

import { Public } from '../constants/SetMetadata';
import { AutenticacaoUsuario } from '../auth.dto/AutenticacaoUsuario';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        login: { type: 'string', example: 'admin' },
        senha: { type: 'string', example: 'admin' },
      },
    },
  })
  @Post('login')
  async logar(@Body() autenticacaoUsuario: AutenticacaoUsuario) {
    const { login, senha } = autenticacaoUsuario;
    return await this.authService.validarLogin(login, senha);
  }
}
