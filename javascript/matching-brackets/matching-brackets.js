export const matchingBrackets = str => {
  let stack = [];
  let remainder = [...str].reverse();
  while (remainder.length) {
    console.log(`remainder: ${remainder} ; stack: ${stack}`);
    const curr = remainder.pop();
    if (curr === '{' || curr === '[' || curr === '(') stack.push(curr);
    if (curr === '}' || curr === ']' || curr === ')') {
      const opener = stack.pop();
      console.log(`curr: ${curr} ; opener: ${opener}`);
      // if (['}', ']'].includes(curr)) return false;
      if (curr === '}' && opener !== '{') return false;
      if (curr === ']' && opener !== '[') return false;
      if (curr === ')' && opener !== '(') return false;
    }
  }
  return !stack.length;
};
