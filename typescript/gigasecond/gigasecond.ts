export default class Gigasecond {
	private _d: number;
	constructor(start: Date) {
		this._d = start.getTime() + 1e12;
	}

	date = (): Date => new Date(this._d);
}
