function reverseString(str) {
  let str2 = '';
  let i = str.length;
  while (i >= 0) {
    str2 += str.charAt(i);
    i -= 1;
  }
  return str2;
}

export { reverseString };
