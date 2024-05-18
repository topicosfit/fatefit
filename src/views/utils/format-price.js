export function formatPrice(price) {
  if (typeof price !== 'number') {
    throw new TypeError('Value must be a number');
  }

  const floatValue = price / 100;

  const formattedValue = floatValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return formattedValue;
}