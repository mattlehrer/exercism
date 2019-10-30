export class HighScores {
  constructor(scores) {
    this.scoresArray = scores;
    this.personalBestScore = [...scores].reduce((max, curr) => Math.max(max, curr), 0);
    this.personalTopThreeScores = [...scores].sort((a, b) => b - a).slice(0, 3);
  }

  get scores() {
    return this.scoresArray;
  }

  get latest() {
    return this.scoresArray[this.scoresArray.length - 1];
  }

  get personalBest() {
    return this.personalBestScore;
  }

  get personalTopThree() {
    return this.personalTopThreeScores; 
  }
}
