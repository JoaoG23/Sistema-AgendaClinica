import * as moment from 'moment';
import { uid } from 'rand-token';

export const gerarToken = () => {
  const validadeToken = moment().add(10, 'minutes');
  moment.locale('pt-BR');

  const token = uid(6);
  return { token, validadeToken };
};
