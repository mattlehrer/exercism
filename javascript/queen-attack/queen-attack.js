//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
    constructor(positions = { white: [0, 3], black: [7, 3] }) {
      this.white = positions.white;
      this.black = positions.black;
      if (this.white[0] === this.black[0] && this.white[1] === this.black[1]) {
        throw new Error('Queens cannot share the same space');
      }
    }

    toString() {
      let board = [
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _',
        '_ _ _ _ _ _ _ _'
      ];
      board[this.white[0]] = `${'_ '.repeat(this.white[1])}W ${'_ '.repeat(7)}`.slice(0,15);
      board[this.black[0]] = `${'_ '.repeat(this.black[1])}B ${'_ '.repeat(7)}`.slice(0,15);
      board[7] += '\n';
      return board.join('\n');
    }

    canAttack() {
      if (this.white[0] === this.black[0] || this.white[1] === this.black[1]) {
        return true;
      }
      return Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1]);
    }
}
