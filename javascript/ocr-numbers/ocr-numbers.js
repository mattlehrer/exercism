/*
      _  _     _  _  _  _  _  _  #
    | _| _||_||_ |_   ||_||_|| | # decimal numbers.
    ||_  _|  | _||_|  ||_| _||_| #
                                 # fourth line is always blank
*/

export const convert = input => {
  const inputRows = input.split('\n');
  const digits = inputRows[0].length / 3;
  let output = '';
  for (let r = 0; r < inputRows.length / 4; r++) {
    if (output) output += ',';
    for (let i = 0; i < digits; i++) {
      // top
      if (inputRows[r*4 + 0].slice(i * 3, i*3 + 3) === '   ') {
        // middle
        if (inputRows[r*4 + 1].slice(i * 3, i*3 + 3) === '  |' && inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === '  |') {
          output += '1';
        } else if (inputRows[r*4 + 1].slice(i * 3, i*3 + 3) === '|_|' && inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === '  |') {
          output += '4';
        } else {
          output += '?';
        }
      } else if (inputRows[r*4 + 0].slice(i * 3, i*3 + 3) === ' _ ') {
        // middle
        if (inputRows[r*4 + 1].slice(i * 3, i*3 + 3) === ' _|') {
          if (inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === '|_ ') {
            output += '2';
          } else if (inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === ' _|') {
            output += '3';
          } else {
            output += '?';
          }
        } else if (inputRows[r*4 + 1].slice(i * 3, i*3 + 3) === '|_ ') {
          if (inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === ' _|') {
            output += '5';
          } else if (inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === '|_|') {
            output += '6';
          } else {
            output += '?';
          }
        } else if (inputRows[r*4 + 1].slice(i * 3, i*3 + 3) === '  |') {
          if (inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === '  |') {
            output += '7';
          } else {
            output += '?';
          }
        } else if (inputRows[r*4 + 1].slice(i * 3, i*3 + 3) === '|_|') {
          if (inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === '|_|') {
            output += '8';
          } else if (inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === ' _|') {
            output += '9';
          } else {
            output += '?';
          }
        } else if (inputRows[r*4 + 1].slice(i * 3, i*3 + 3) === '| |') {
          if (inputRows[r*4 + 2].slice(i * 3, i*3 + 3) === '|_|') {
            output += '0';
          } else {
            output += '?';
          }
        }
      } else {
        output += '?';
      }
    }
  }
  return output;
};
