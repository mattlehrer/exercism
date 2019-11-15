export class Forth {

  constructor() {
    this.s = [];
    this.customInstructions = {};
  }

  evaluate(str) {
    let a;
    let b;
    let evalStack = str.split(' ').reverse();
    while (evalStack.length) {
      const e = evalStack.pop().toLowerCase();
      if (e === ':') {
        const instrName = evalStack.pop().toLowerCase();
        if (Number.isInteger(Number(instrName))) throw new Error('Invalid definition');
        let instructions = [];
        let i = evalStack.pop();
        while (i !== ';') {
          instructions.push(i);
          i = evalStack.pop();
        }
        this.customInstructions[instrName] = instructions.reverse();
      } else if (Object.keys(this.customInstructions).includes(e)) {
        evalStack.push(...this.customInstructions[e]);
      } else if (Number.isInteger(Number(e))) {
        this.s.push(Number(e));
      } else {
        switch(e) {
          case '+':
            if (this.s.length < 2) throw new Error('Stack empty');
            b = this.s.pop();
            a = this.s.pop();
            this.s.push(a+b);
            break;
          case '-':
            if (this.s.length < 2) throw new Error('Stack empty');
            b = this.s.pop();
            a = this.s.pop();
            this.s.push(a-b);
            break;
          case '*':
            if (this.s.length < 2) throw new Error('Stack empty');
            b = this.s.pop();
            a = this.s.pop();
            this.s.push(a*b);
            break;
          case '/':
            if (this.s.length < 2) throw new Error('Stack empty');
            b = this.s.pop();
            a = this.s.pop();
            if (b === 0) throw new Error('Division by zero');
            this.s.push(Math.floor(a/b));
            break;
          case 'dup':
            if (!this.s.length) throw new Error('Stack empty');
            this.s.push(this.s[this.s.length-1]);
            break;
          case 'drop':
            if (!this.s.length) throw new Error('Stack empty');
            this.s.pop();
            break;
          case 'swap':
            if (this.s.length < 2) throw new Error('Stack empty');
            b = this.s.pop();
            a = this.s.pop();
            this.s.push(b);
            this.s.push(a);
            break;
          case 'over':
            if (this.s.length < 2) throw new Error('Stack empty');
            this.s.push(this.s[this.s.length-2]);
            break;
          default:
            throw new Error('Unknown command');
        }
      }
    }
  }

  get stack() {
    return this.s;
  }

}
