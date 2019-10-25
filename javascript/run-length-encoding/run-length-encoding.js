function encode(str) {
  let e = '';
  let i = 0;
  let j;
  while (i < str.length) {
    j = i;
    while (j < str.length) {
      if (str.charAt(j + 1) === str.charAt(j)) {
        j += 1;
      } else {
        break;
      }
    }
    if (j > i) {
      e += `${j - i + 1}${str.charAt(i)}`;
      i += j - i + 1;
    } else {
      e += str.charAt(i);
      i += 1;
    }
  }
  return e;
}

function decode(str) {
  let d = '';
  let substr = str;
  while (substr.length > 0) {
    const nums = substr.match(/[0-9]*/g);
    if (nums[0] === '') {
      d += substr.charAt(0);
      substr = substr.substring(1, substr.length);
    } else {
      d += substr.charAt(nums[0].length).repeat(nums[0]);
      substr = substr.substring(nums[0].length + 1, substr.length);
    }
  }
  return d;
}

export { encode, decode };
