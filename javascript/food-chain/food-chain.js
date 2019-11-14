const VERSES = {
  1: {
    animal: 'fly',
    lyrics: ''
  },
  2: {
    animal: 'spider',
    lyrics: `It wriggled and jiggled and tickled inside her.`
  },
  3: {
    animal: 'bird',
    lyrics: `How absurd to swallow a bird!`
  },
  4: {
    animal: 'cat',
    lyrics: `Imagine that, to swallow a cat!`
  },
  5: {
    animal: 'dog',
    lyrics: `What a hog, to swallow a dog!`
  },
  6: {
    animal: 'goat',
    lyrics: `Just opened her throat and swallowed a goat!`
  },
  7: {
    animal: 'cow',
    lyrics: `I don't know how she swallowed a cow!`
  },
  8: {
    animal: 'horse',
    lyrics: `She's dead, of course!`
  }
};


export class Song {
  
  verse(n) {
    if (n < 0 || n > 8) throw new Error('Invalid verse');

    const begin = i => `I know an old lady who swallowed a ${VERSES[i].animal}.\n`;
    const middle = i => `She swallowed the ${VERSES[i].animal} to catch the ${VERSES[i-1].animal}${i === 3 ? ' that wriggled and jiggled and tickled inside her' : ''}.`;
    const end = `I don't know why she swallowed the fly. Perhaps she'll die.\n`;
    
    if (n === 8) {
      return `${begin(n)}${VERSES[n].lyrics}\n`;
    }
    let output = `${begin(n)}${VERSES[n].lyrics}${n === 1 ? '' : '\n'}`;
    
    for (let i = n; i >= 2; i--) {
      output += `${middle(i)}\n`;
    }

    output += end;
    return output;
  }

  verses(start, end) {
    if (start > end || start < 1 || end > 8 || start > 8) throw new Error('Invalid verses');

    let output = '';
    for (let i = start; i < end + 1; i++) {
      output += `${this.verse(i)}\n`;
    }
    return output;
  }
}
