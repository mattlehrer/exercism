const VERSES = {
  1: {
    noun: 'house'
  },
  2: {
    noun: 'malt',
    verb: 'lay in'
  },
  3: {
    noun: 'rat',
    verb: 'ate'
  },
  4: {
    noun: 'cat',
    verb: 'killed'
  },
  5: {
    noun: 'dog',
    verb: 'worried'
  },
  6: {
    noun: 'cow with the crumpled horn',
    verb: 'tossed'
  },
  7: {
    noun: 'maiden all forlorn',
    verb: 'milked'
  },
  8: {
    noun: 'man all tattered and torn',
    verb: 'kissed'
  },
  9: {
    noun: 'priest all shaven and shorn',
    verb: 'married'
  },
  10: {
    noun: 'rooster that crowed in the morn',
    verb: 'woke'
  },
  11: {
    noun: 'farmer sowing his corn',
    verb: 'kept'
  },
  12: {
    noun: 'horse and the hound and the horn',
    verb: 'belonged to'
  }

};

export class House {
  static verse(n) {
    const v = i => {
      if (i === 1) return VERSES[i].noun;
      return `${VERSES[i].noun}\nthat ${VERSES[i].verb} the ${v(i-1)}`;
    }
    return `This is the ${v(n)} that Jack built.`.split('\n');
  }

  static verses(start, end) {
    if (start > end || start < 1 || end > 12 || start > 12) throw new Error('Invalid verses');

    let output = [];
    for (let i = start; i < end; i++) {
      output.push(...this.verse(i));
      output.push('');
    }
    output.push(...this.verse(end));
    return output;
  }
}
