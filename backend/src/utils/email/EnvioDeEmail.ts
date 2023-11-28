import * as nodemailer from 'nodemailer';
import { ConfiguracaoEmail } from './types/ConfiguracaoEmail';
export class EnvioDeEmail {
  public converterNullOuVazioEmEmail(email) {
    return email === null || email === '' ? 'email@email.com' : email;
  }

  public async enviarEmail({
    destinatarioConfigs,
    remetenteConfigs,
  }: ConfiguracaoEmail) {
    const { emailDestino, assunto, conteudo } = destinatarioConfigs;
    const { usuarioRemente, senha, host, porta, servico } = remetenteConfigs;

    const transporter = nodemailer.createTransport({
      host,
      port: porta,
      auth: { user: usuarioRemente, pass: senha },
    });

    const correioConfiguracao = {
      from: `Token de Usuários <${usuarioRemente}>`,
      to: emailDestino,
      subject: assunto,
      html: conteudo,
      //   attachments: [
      //     {
      //       filename: 'xc_logo.png',
      //       path: __dirname + '/assets/xc_logo.png',
      //       cid: 'logo',
      //     },
      //   ],
    };

    try {
      const data = await transporter.sendMail(correioConfiguracao);
    } catch (error) {
      console.error(error);
    }
  }
}
