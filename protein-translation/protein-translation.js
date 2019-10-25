export default function translate(rna = '') {
  // eslint-disable-next-line prefer-const
  let proteins = [];
  const codons = rna.match(/[A-Z]{3}/g);
  if (codons === null) { return proteins; }
  let i = 0;
  while (i < codons.length) {
    switch (codons[i]) {
      case 'AUG':
        proteins.push('Methionine');
        break;
      case 'UUU':
      case 'UUC':
        proteins.push('Phenylalanine');
        break;
      case 'UUA':
      case 'UUG':
        proteins.push('Leucine');
        break;
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG':
        proteins.push('Serine');
        break;
      case 'UAU':
      case 'UAC':
        proteins.push('Tyrosine');
        break;
      case 'UGU':
      case 'UGC':
        proteins.push('Cysteine');
        break;
      case 'UGG':
        proteins.push('Tryptophan');
        break;
      case 'UAA':
      case 'UAG':
      case 'UGA':
        return proteins;
      default:
        throw new Error('Invalid codon');
    }
    i += 1;
  }
  return proteins;
}
