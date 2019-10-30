export class Anagram {
  constructor(word) {
    this.word = word;
    this.sorted = word.toLowerCase().split('').sort().join('');
  }

  matches(potentialAnagrams) {
    return potentialAnagrams.filter(w => w.toLowerCase() !== this.word.toLowerCase() && w.toLowerCase().split('').sort().join('') === this.sorted);
  }
}
