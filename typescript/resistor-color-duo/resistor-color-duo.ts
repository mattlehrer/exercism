export class ResistorColor {
	private colors: string[];
	private CONVERSION = [
		'black',
		'brown',
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'violet',
		'grey',
		'white',
	];
	constructor(colors: string[]) {
		if (colors.length < 2) {
			throw new Error('At least two colors need to be present');
		}
		this.colors = colors;
	}
	value = (): number => {
		return Number(
			`${this.CONVERSION.indexOf(this.colors[0])}${this.CONVERSION.indexOf(
				this.colors[1],
			)}`,
		);
	};
}
