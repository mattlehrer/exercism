export const proverb = (...args) => {
  const line = (a, b) => `For want of a ${a} the ${b} was lost.`
  const last = a => `And all for the want of a ${a}.`

  let qualifier;

  if (args[args.length - 1].qualifier) {
    qualifier = args.pop().qualifier;
  }

  let output = '';
  for (let i = 0; i < args.length - 1; i++) {
    output += line(args[i], args[i+1]) + '\n'
  }
  let allFor = qualifier ? `${qualifier} ${args[0]}` : args[0];
  output += last(allFor);
  return output;
};
