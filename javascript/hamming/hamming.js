export const compute = (dna1, dna2) => {
  if (dna1.length === dna2.length) {
    let d = 0;
    let i = 0;
    while (i < dna1.length) {
      if (dna1.charAt(i) !== dna2.charAt(i)) {
        d += 1;
      }
      i += 1;
    }
    return d;
  }
  throw new Error('left and right strands must be of equal length');
};
