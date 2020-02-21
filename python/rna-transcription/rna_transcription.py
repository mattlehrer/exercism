def to_rna(dna_strand):
  COMPLEMENT = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
  return ''.join(map(lambda c: COMPLEMENT[c], dna_strand))
