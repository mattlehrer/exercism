const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
}

export class ResistorColorTrio {
  constructor(colors) {
    colors.forEach(c => {
      if (COLORS[c] === undefined) throw new Error('invalid color');
    })
    const pow = COLORS[colors.pop()];
    let num = colors.reduce((n, color) => Number(`${n}${COLORS[color]}`), 0);
    this.value = num * (10 ** pow);
  }

  get label() {
    if (this.value >= 1000) {
      return `Resistor value: ${this.value / 1000} kiloohms`;
    }
    return `Resistor value: ${this.value} ohms`;
  }
}
