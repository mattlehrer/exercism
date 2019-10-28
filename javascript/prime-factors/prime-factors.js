export const primeFactors = num => {
  let primeFactors = [];
  let i = 2;
  let remainder = num;

  if (remainder )

  while (remainder >= 2) {
    if (remainder % i) {
      i++;
    } else {
      remainder /= i;
      primeFactors.push(i);
      if (remainder % i) {
        i++;
      }
    }
  }
  return primeFactors;
};
