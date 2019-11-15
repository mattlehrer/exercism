export class BeerSong {
  static verse(n) {
    if (n>1) return `${n} bottles of beer on the wall, ${n} bottles of beer.
Take one down and pass it around, ${n-1} bottle${n-1>1 ? 's' : ''} of beer on the wall.
`;  
    if (n === 1) return `${n} bottle of beer on the wall, ${n} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`;  
    return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`;
  }

  static sing(start = 99, end = 0) {
    let output = '';
    for (let i = start; i > end; i--) {
      output += this.verse(i) + '\n';
    }
    output += this.verse(end);
    return output;
  }
}
