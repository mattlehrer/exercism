export const steps = (n) => {
  if (n>0) {
    let s = 0;
    while (n > 1) {
      if (n % 2 === 0) {
        n = n/2;
        s += 1;
      } else {
        n = 3*n + 1;
        s += 1;
      }
    }
    return s;
  } else {
    throw 'Only positive numbers are allowed'
  }
}
