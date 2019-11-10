export class Diamond {
  makeDiamond(letter) {
    let output = [];
    const n = letter.charCodeAt() - 'A'.charCodeAt() + 1;
    for (let i = 0; i < n; i++) {
      const outerPad = ' '.repeat(n-1-i);
      if (!i) {
        output.push(`${outerPad}${String.fromCharCode('A'.charCodeAt() + i)}${outerPad}\n`);
      } else {
        const innerPad = ' '.repeat((i-1)*2 + 1)
        output.push(`${outerPad}${String.fromCharCode('A'.charCodeAt() + i)}${innerPad}${String.fromCharCode('A'.charCodeAt() + i)}${outerPad}\n`);
      }
    }
    for (let i = n - 2; i >= 0; i--) {
      output.push(output[i]);
    }
    return output.join('');
  }
}
