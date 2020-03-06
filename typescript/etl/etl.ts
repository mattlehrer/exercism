const transform = (old: {
	[key: string]: string[];
}): { [key: string]: number } => {
	const output: { [key: string]: number } = {};
	for (const num in old) {
		for (const letter of old[num]) {
			output[letter.toLowerCase()] = Number(num);
		}
	}
	return output;
};

export default transform;
