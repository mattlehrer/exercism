const ALLERGENS = {
  1: 'eggs',
  2: 'peanuts',
  4: 'shellfish',
  8: 'strawberries',
  16: 'tomatoes',
  32: 'chocolate',
  64: 'pollen',
  128: 'cats'
};

class Allergies {
  constructor(score) {
    this.score = score;
  }
  list() {
    let score = this.score;
    const output = [];
    let i = 0;
    while (score > 255) {
      score -= 256
    }
    while (score) {
      if (score & 2 ** i) {
        output.push(ALLERGENS[2 ** i]);
        score -= 2 ** i;
      }
      i++;
    }
    return output;
  }
  allergicTo(allergen) {
    const list = this.list();
    return list.indexOf(allergen) > -1;
  }
}

export { Allergies };