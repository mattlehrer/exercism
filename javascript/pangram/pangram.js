export const isPangram = sentence => {
  // const uniqueLetters = new Set([...(sentence.toLowerCase().split('').filter(letter => letter.search(/[a-z]/) >= 0))]);
  // return uniqueLetters.size === 26;

  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(letter => sentence.toLowerCase().includes(letter));
};
