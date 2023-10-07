import nodeMailer from 'nodemailer';
import { ConfiguracaoEmail } from './types/ConfiguracaoEmail';

export class EnvioDeEmail {
  public converterNullOuVazioEmEmail(email) {
    return email === null || email === '' ? 'email@email.com' : email;
  }

  public enviarEmail({
    destinatarioConfigs,
    remetenteConfigs,
  }: ConfiguracaoEmail) {
    const { emailDestino, assunto, conteudo } = destinatarioConfigs;
    const { usuarioRemente, senha, host, porta, servico } = remetenteConfigs;

    const transporter = nodeMailer.createTransport({
      service: servico || '',
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

    transporter
      .sendMail(correioConfiguracao)
      .then((data) => {
        const isEmaisEnviados = data.accepted;

        const emailsDestinos = data.accepted;
        const remente = data.envelope.from;
        const messageId = data.messageId;
        console.log('🚀 ~ messageId:', messageId);
      })
      .catch((erro) => {
        console.error(erro);
      });
  }
}
