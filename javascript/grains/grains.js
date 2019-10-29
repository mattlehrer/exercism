import BigInt from './lib/big-integer';

export class Grains {
  square(square) {
    return BigInt(2).pow(square - 1).toString();
  }

  total() {
    let total = BigInt(0);
    for (let i = 1; i <= 64; i++) {
      total = total.add(BigInt(2).pow(i - 1));
    }
    return total.toString();
  }

  // this is actually slower using the finite geometric series formula
  // sum from i = 1..n of 2^i = 2 * (2^n - 1)
  // total() { 
  //   return BigInt(2).pow(63).minus(1).times(2).add(1).toString();
  // }
}
