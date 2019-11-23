class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    let results = {};
    words.forEach(word => {
      const grid = this.grid;
      for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] === word[0]) {
            let z = 1;
            // try E
            while (col+z < grid[row].length && z < word.length && grid[row][col+z] === word[z]) {
              z++;
            }
            if (z === word.length) {
              results[word] = {
                start: [row+1, col+1], 
                end: [row+1, col+word.length]
              };
            }
            
            // try W
            z = 1;
            while (col-z >= 0 && z < word.length && grid[row][col-z] === word[z]) {
              z++;
            }
            if (z === word.length) {
              results[word] = {
                start: [row+1, col+1], 
                end: [row+1, col+2-word.length]
              };
            }
            
            // try S
            z = 1;
            while (row+z < grid.length && z < word.length && grid[row+z][col] === word[z]) {
              z++;
            }
            if (z === word.length) {
              results[word] = {
                start: [row+1, col+1], 
                end: [row+word.length, col+1]
              };
            }

            // try N
            z = 1;
            while (row-z >= 0 && z < word.length && grid[row-z][col] === word[z]) {
              z++;
            }
            if (z === word.length) {
              results[word] = {
                start: [row+1, col+1], 
                end: [row+2-word.length, col+1]
              };
            }

            // try SE
            z = 1;
            while (row+z < grid.length && col+z < grid[0].length && z < word.length && grid[row+z][col+z] === word[z]) {
              z++;
            }
            if (z === word.length) {
              results[word] = {
                start: [row+1, col+1], 
                end: [row+word.length, col+word.length]
              };
            }

            // try SW
            z = 1;
            while (row+z < grid.length && col-z >= 0 && z < word.length && grid[row+z][col-z] === word[z]) {
              z++;
            }
            if (z === word.length) {
              results[word] = {
                start: [row+1, col+1], 
                end: [row+word.length, col+2-word.length]
              };
            }

            // try NE
            z = 1;
            while (row-z >= 0 && col+z < grid[0].length && z < word.length && grid[row-z][col+z] === word[z]) {
              z++;
            }
            if (z === word.length) {
              results[word] = {
                start: [row+1, col+1], 
                end: [row+2-word.length, col+word.length]
              };
            }

            // try NW
            z = 1;
            while (row-z >= 0 && col-z >= 0 && z < word.length && grid[row-z][col-z] === word[z]) {
              z++;
            }
            if (z === word.length) {
              results[word] = {
                start: [row+1, col+1], 
                end: [row+2-word.length, col+2-word.length]
              };
            }

          }
        }
      }
    });
    return results;
  }
}

export default WordSearch;
