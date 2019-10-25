const trans = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export function toRna(dna) {
  const dnaArray = dna.split('');
  if (dna === '') return '';
  return dnaArray.reduce((acc, x) => {
    if (trans.hasOwnProperty(x)) {
      return `${acc}${trans[x]}`;
    }
    throw new Error('Invalid input DNA.');
  }, '');
}
