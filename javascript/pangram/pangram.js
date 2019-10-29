const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = sentence => {
  const uniqueLetters = new Set([...(sentence.toLowerCase().split('').filter(letter => ALPHABET.split('').includes(letter)))]);
  return ALPHABET === [...uniqueLetters].sort().join('');
};
