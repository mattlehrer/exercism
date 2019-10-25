const NucleotideCounts = {
  parse(strand) {
    const strandArray = strand.split('');
    let a = 0;
    let c = 0;
    let g = 0;
    let t = 0;
    strandArray.forEach(nucleotide => {
      if (nucleotide === 'A') {
        a++;
      } else if (nucleotide === 'C') {
        c++;
      } else if (nucleotide === 'G') {
        g++;
      } else if (nucleotide === 'T') {
        t++;
      } else {
        throw new Error('Invalid nucleotide in strand');
      }
    });
    return `${a} ${c} ${g} ${t}`;
  }
}

export { NucleotideCounts };