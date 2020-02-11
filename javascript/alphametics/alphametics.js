export const solve = puzzle => {
  const isWorkingSolution = (substitutions, puzzle) => {
    // ensure uniqueness
    let setOfSubs = new Set();
    for (const l in substitutions) {
      if (setOfSubs.has(substitutions[l])) return false;
      setOfSubs.add(substitutions[l]);
    }
    const value = str => Number(str.split('').map(l => substitutions[l]).join(''));
    const [lhs, rhs] = puzzle.split(' == ');
    let words = [];
    if (lhs.indexOf(' + ') === -1) {
      words.push(lhs);
    } else {
      words = lhs.split(' + ');
    }
    // ensure no leading zeroes
    if (substitutions[rhs[0]] === 0) return false;
    for (const word of words) {
      if (substitutions[word[0]] === 0) return false;
    }
    
    return words.reduce((acc, w) => acc + value(w), 0) === value(rhs);
  }
  
  const allLetters = new Set(puzzle.match(/[A-Z]/g));
  function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : 1;
  }
  
  const subsTried = new Set();
  while (subsTried.size < (factorial(10)/factorial(10-allLetters.size))) {
    const nums = Array.from(Array(10).keys());
    const attempt = {};
    allLetters.forEach(l => {
      attempt[l] = nums.splice(Math.floor(Math.random()*nums.length), 1)[0];
    });
    if (!subsTried.has(JSON.stringify(attempt)) && isWorkingSolution(attempt, puzzle)) return attempt;
    subsTried.add(JSON.stringify(attempt));
  }
  console.log(subsTried.size);
  return null;
};
