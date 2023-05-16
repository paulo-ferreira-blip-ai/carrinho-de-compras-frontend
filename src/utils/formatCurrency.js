//método recebe os valores numeros dos produtos e converte para o estilo brasileiro R$ + valor
const formatCurrency = ( value, currency ) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency });
};

export default formatCurrency;
