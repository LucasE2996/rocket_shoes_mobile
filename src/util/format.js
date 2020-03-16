import Intl from 'react-native-intl';

export const {format: formatPrice} = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
