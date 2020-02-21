def to_rna(dna_strand):
  COMPLEMENT = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'}
  rna = []
  for char in dna_strand:
    rna.append(COMPLEMENT[char])
  return ''.join(rna)