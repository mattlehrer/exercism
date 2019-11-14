export class Say {
  inEnglish(n) {
    const underTwenty = x => {
      switch(x) {
        case 0:
          return 'zero';
        case 1:
          return 'one';
        case 2:
          return 'two';
        case 3:
          return 'three';
        case 4:
          return 'four';
        case 5:
          return 'five';
        case 6:
          return 'six';
        case 7:
          return 'seven';
        case 8:
          return 'eight';
        case 9:
          return 'nine';
        case 10:
          return 'ten';
        case 11:
          return 'eleven';
        case 12:
          return 'twelve';
        case 13:
          return 'thirteen';
        case 14:
          return 'fourteen';
        case 15:
          return 'fifteen';
        case 16:
          return 'sixteen';
        case 17:
          return 'seventeen';
        case 18:
          return 'eighteen';
        case 19:
          return 'nineteen';
        default:
          return '';
      }
    }

    const tens = x => {
      switch(x) {
        case 20:
          return 'twenty';
        case 30:
          return 'thirty';
        case 40:
          return 'forty';
        case 50:
          return 'fifty';
        case 60:
          return 'sixty';
        case 70:
          return 'seventy';
        case 80:
          return 'eighty';
        case 90:
          return 'ninety';
      }
    }

    const powersOfTen = x => {
      if (x >= 1e9) return 'billion';
      if (x >= 1e6) return 'million';
      if (x >= 1e3) return 'thousand';
    }

    if (n < 0 || n >= 1e12) {
      throw new Error('Number must be between 0 and 999,999,999,999.')
    }

    if (n < 20) return underTwenty(n);

    let remainder = n;
    let output = '';
    while (remainder > 0) {
      let remainderString = String(remainder);
      let partial = Number(remainderString.slice(0, remainderString.length % 3 || 3));
      if (partial >= 100) {
        output += ' ' + underTwenty(Math.floor(partial/100)) + ' hundred';
        partial -= 100 * (Math.floor(partial/100));
      }
      if (partial >= 20) {
        output += ' ' + tens(Math.floor(partial/10) * 10);
        partial -= Math.floor(partial/10) * 10;
        if (partial) {
          output += '-' + underTwenty(partial);
          partial = 0;
        }
      }
      if (partial > 0) {
        output += ' ' + underTwenty(partial);
        partial = 0;
      }
      if (remainder >= 1000) {
        output += ' ' + powersOfTen(remainder);
      }
      remainder = Number(remainderString.slice(remainderString.length % 3 || 3));
      
    }
    return output.trim();

  }
}
