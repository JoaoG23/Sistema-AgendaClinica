export const gerarCorpoTokenEmail = (token: string, nomeUsuario: string) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0074cc;">
        <tr>
            <td align="center" valign="top" style="padding: 20px 0;">
                <h1 style="color: #ffffff;">Seu Token de Acesso</h1>
            </td>
        </tr>
    </table>

    <table align="center" border="0" cellpadding="20" cellspacing="0" width="600" style="background-color: #ffffff;">
        <tr>
            <td>
            <h2 style="color: gray;">Olá! ${nomeUsuario}</h2>
            </td>
        </tr>
        <tr>
            <td>
                <p>Espero que este e-mail o encontre bem. Estamos felizes em fornecer a você o seu token de acesso, que é essencial para concluir sua autenticação e acessar nossos serviços/portal/programa.</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>
                Token de Acesso: ${token}
                </p>
                <ol>
                    <li>Acesse <a href="[URL do serviço/portal/programa]">URL do serviço/portal/programa</a>.</li>
                    <li>Na página de login, insira seu nome de usuário e senha.</li>
                    <li>Em seguida, insira o token de acesso fornecido acima no campo apropriado.</li>
                    <li>Clique em "Enviar" ou "Entrar" para acessar sua conta.</li>
                </ol>


              <p>  É extremamente importante manter este token em segurança e não compartilhá-lo com mais ninguém. Este token é a chave para garantir a segurança de sua conta e proteger suas informações pessoais.
                
                Para utilizar seu token, siga estas etapas:</p>
                

               <p>Lembre-se de que o token é sensível a maiúsculas e minúsculas, portanto, certifique-se de digitá-lo exatamente como está apresentado acima.</p>
            </td>
        </tr>
    </table>

    <table align="center" border="0" cellpadding="20" cellspacing="0" width="600" style="background-color: #0074cc;">
        <tr>
            <td align="center" valign="top" style="color: #ffffff;">
                <p>&copy; 2023 Clinica Agendamentos. Todos direitos reservados.</p>
            </td>
        </tr>
    </table>
</body>
</html>

    `;
};
// export const gerarCorpoTokenEmail = (token: string, nomeUsuario: string) => {
//   return `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Email Template</title>
//     </head>
//     <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f0f0f0;">
//         <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0074cc;">
//             <tr>
//                 <td align="center" valign="top" style="padding: 20px 0;">
//                     <h1 style="color: #ffffff;">Validação de Token Sistema Agendamento</h1>
//                 </td>
//             </tr>
//         </table>

//         <table align="center" border="0" cellpadding="20" cellspacing="0" width="600" style="background-color: #ffffff;">
//             <tr>
//                 <td>
//                     <h3 style="color: gray;">Olá,${nomeUsuario}</h3>
//                 </td>
//             </tr>
//             <tr>
//                 <td>
//                     <p>Você está perto de concluir registro no sistema Agendamentos</p>
//                     <p>Seu token estará logo abaixo, digite na tela de validação:</p>
//                     <strong>${token}</strong>
//                 </td>
//             </tr>
//         </table>
//     </body>
//     </html>
//     `;
// };
