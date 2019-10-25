function convert(n, fromBase = -1, toBase = -1) {
  if (fromBase < 2 || fromBase % 1) throw new Error('Wrong input base');
  if (toBase < 2 || toBase % 1) throw new Error('Wrong output base');
  if (!n.length || (n[0] === 0 && n.length > 1)) throw new Error('Input has wrong format');
  // convert to decimal
  let decimal = n.reduce((acc, digit, i) => {
    if (digit < 0 || digit >= fromBase) throw new Error('Input has wrong format');
    return acc + (digit * (fromBase ** (n.length - i - 1)));
  }, 0);
  if (decimal === 0) return [0];
  // convert decimal to toBase
  const output = [];
  while (decimal > 0) {
    output.unshift(decimal % toBase);
    decimal = Math.floor(decimal / toBase);
  }
  return output;
}

export { convert };
