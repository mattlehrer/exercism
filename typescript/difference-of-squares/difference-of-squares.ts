export default class Squares {
	private sqOfSum: number;
	private sumOfSq: number;

	constructor(n: number) {
		this.sqOfSum = ((n * (n + 1)) / 2) ** 2;
		this.sumOfSq = [...Array(n).keys()].reduce(
			(acc: number, curr: number): number => acc + (1 + curr) ** 2,
			0,
		);
	}

	get squareOfSum(): number {
		return this.sqOfSum;
	}

	get sumOfSquares(): number {
		return this.sumOfSq;
	}

	get difference(): number {
		return this.sqOfSum - this.sumOfSq;
	}
}
