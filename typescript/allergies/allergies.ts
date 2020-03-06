export default class Allergies {
	private score: number;
	private allergies: string[];

	private readonly ALLERGEN_SCORES: { [food: string]: number } = {
		eggs: 1,
		peanuts: 2,
		shellfish: 4,
		strawberries: 8,
		tomatoes: 16,
		chocolate: 32,
		pollen: 64,
		cats: 128,
	};

	constructor(score: number) {
		this.score = score;
		this.allergies = [];
		for (const food in this.ALLERGEN_SCORES) {
			if (this.allergicTo(food)) this.allergies.push(food);
		}
	}

	allergicTo = (food: string): boolean => {
		return !!(this.score & this.ALLERGEN_SCORES[food]);
	};

	list = (): string[] => {
		return this.allergies;
	};
}
