export const recite = (start, end = null) => {
  const VERSES = {
    1: {
      nth: 'first',
      lyric: 'a Partridge in a Pear Tree'
    },
    2: {
      nth: 'second',
      lyric: 'two Turtle Doves'
    },
    3: {
      nth: 'third',
      lyric: 'three French Hens'
    },
    4: {
      nth: 'fourth',
      lyric: 'four Calling Birds'
    },
    5: {
      nth: 'fifth',
      lyric: 'five Gold Rings'
    },
    6: {
      nth: 'sixth',
      lyric: 'six Geese-a-Laying'
    },
    7: {
      nth: 'seventh',
      lyric: 'seven Swans-a-Swimming'
    },
    8: {
      nth: 'eighth',
      lyric: 'eight Maids-a-Milking'
    },
    9: {
      nth: 'ninth',
      lyric: 'nine Ladies Dancing'
    },
    10: {
      nth: 'tenth',
      lyric: 'ten Lords-a-Leaping'
    },
    11: {
        nth: 'eleventh',
        lyric: 'eleven Pipers Piping'
    },
    12: {
      nth: 'twelfth',
      lyric: 'twelve Drummers Drumming'
    }
  }
  
  const verse = n => {
    let v = `On the ${VERSES[n].nth} day of Christmas my true love gave to me: `;
    let i = n;
    while (i > 1) {
      v += VERSES[i].lyric + ', ';
      i--;
    }
    if (n > 1) {
      v += 'and ';
    }
    v += VERSES[1].lyric + '.\n';
    return v;
  }

  if (!end) return verse(start);

  let output = '';
  for (let i = start; i < end; i++) {
    output += verse(i) + '\n';
  }
  output += verse(end);
  return output;
};
