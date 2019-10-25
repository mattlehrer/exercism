export const toRoman = (n) => {
  let roman = '';
  let remainder = n;
  while (remainder > 0) {
    if (remainder >= 1000) {
      roman += 'M';
      remainder -= 1000;
    } else if (remainder >= 900) {
      roman += 'CM';
      remainder -= 900;
    } else if (remainder >= 500) {
      roman += 'D';
      remainder -= 500;
    } else if (remainder >= 400) {
      roman += 'CD';
      remainder -= 400;
    } else if (remainder >= 100) {
      roman += 'C';
      remainder -= 100;
    } else if (remainder >= 90) {
      roman += 'XC';
      remainder -= 90;
    } else if (remainder >= 50) {
      roman += 'L';
      remainder -= 50;
    } else if (remainder >= 40) {
      roman += 'XL';
      remainder -= 40;
    } else if (remainder >= 10) {
      roman += 'X';
      remainder -= 10;
    } else if (remainder >= 9) {
      roman += 'IX';
      remainder -= 9;
    } else if (remainder >= 5) {
      roman += 'V';
      remainder -= 5;
    } else if (remainder === 4) {
      roman += 'IV';
      remainder -= 4;
    } else if (remainder < 4) {
      roman += 'I';
      remainder -= 1;
    }
  }
  return roman;
};