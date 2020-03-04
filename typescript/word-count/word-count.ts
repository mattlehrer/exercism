class Words {
	count = (phrase: string): Map<string, number> => {
		phrase = phrase.trim().replace(/\s+/g, ' ');
		const words = [...phrase.toLowerCase().split(' ')];
		let counts = new Map();
		new Set([...words]).forEach(uniqueWord => {
			counts.set(
				uniqueWord,
				words.reduce((acc, w) => acc + Number(uniqueWord === w), 0),
			);
		});
		return counts;
	};
}

export default Words;
