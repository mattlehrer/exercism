export class translator {
  static translate(phrase) {
    const translateWord = word => {
      if ('aeiou'.includes(word[0]) || ['xr', 'yt'].includes(word.slice(0,2))) return `${word}ay`;
      const beginRE = new RegExp(/^((?:[^aeiou]*qu?)|(?:[^aeiou][^aeiouy]*)|(?:y[^aeiou]*))/);
      const matches = word.match(beginRE);
      return word.slice(matches[0].length) + matches[0] + 'ay';
    };

    return phrase.split(' ').map(translateWord).join(' ');
  }
}
