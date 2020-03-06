export default class Triangle {
	sides: number[];

	constructor(...sides: number[]) {
		this.sides = sides;
	}

	kind(): string {
		const a: number = this.sides[0];
		const b: number = this.sides[1];
		const c: number = this.sides[2];
		if (
			this.sides.length != 3 ||
			this.sides.some(s => s <= 0) ||
			a + b < c ||
			c + b < a ||
			a + c < b
		) {
			throw new Error('Invalid sides');
		}
		if (a === b && a === c) return 'equilateral';
		if (a === b || a === c || b === c) return 'isosceles';
		return 'scalene';
	}
}
