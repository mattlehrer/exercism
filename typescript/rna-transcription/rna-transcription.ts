/*
    G -> C
    C -> G
    T -> A
    A -> U
*/

class Transcriptor {
  toRna(dna: string) {
    return [...dna].map((c: string) => {
      switch (c) {
        case 'G':
          return 'C';
        case 'C':
          return 'G';
        case 'T':
          return 'A';
        case 'A':
          return 'U';
        default:
          throw new Error('Invalid input DNA.');
      }
    }).join('');
  }
}

export default Transcriptor