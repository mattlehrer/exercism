const isPalindrome = n => {
  let a = [...String(n)];
  for (let i = 0; i < a.length / 2; i++) {
    if (a[i] !== a[a.length-1-i]) return false;
  }
  return true;
}

export class Palindromes {
  constructor(palindromes) {
    this.palindromes = palindromes;
  }

  static generate({maxFactor, minFactor}) {
    if (minFactor > maxFactor) throw new Error('min must be <= max');
    this.maxFactor = maxFactor;
    let palindromes = [];
    let values = [];
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = Math.max(minFactor, i); j <= maxFactor; j++) {
        if (isPalindrome(i * j)) {
          if (values.includes(i * j)) {
            for (let pal of palindromes) {
              if (pal.value === i * j) pal.factors.push([i, j]);
            }
          } else {
            palindromes.push({value: i * j, factors: [[i, j]]});
            values.push(i*j);
          }
          // console.log(palindromes);
        }
      }
    }
    return new Palindromes(palindromes);
  }

  get smallest() {
    return this.palindromes.length ? this.palindromes.sort((a, b) => a.value - b.value)[0] : {value: null, factors: []};
  }

  get largest() {
    return this.palindromes.length ? this.palindromes.sort((a, b) => b.value - a.value)[0] : {value: null, factors: []};
  }
}
