export type ConfiguracaoEmail = {
  destinatarioConfigs?: {
    emailDestino?: string;
    assunto?: string;
    conteudo?: string;
  };
  remetenteConfigs?: {
    usuarioRemente?: string;
    senha?: string;
    host?: string;
    porta?: number;
    servico?: string;
  };
};
