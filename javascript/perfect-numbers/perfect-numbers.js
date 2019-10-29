const isNaturalNumber = num => num > 0 && Number.isInteger(num);
const factors = num => {
  let factors = [];
  let divisor = num / 2;
  while (divisor > 0) {
    if (!(num % divisor)) factors.push(divisor);
    divisor--;
  }
  return factors;
}

export const classify = num => {
  if (isNaturalNumber(num)) {
    let aliquotSum = factors(num).reduce((sum, curr) => sum + curr, 0);
    if (aliquotSum === num) return 'perfect';
    if (aliquotSum < num) return 'deficient';
    if (aliquotSum > num) return 'abundant';
    return undefined;
  } else {
    throw new Error('Classification is only possible for natural numbers.');
  }
};
