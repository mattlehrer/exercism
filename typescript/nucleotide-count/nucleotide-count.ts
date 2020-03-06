class NucleotideCount {
	static nucleotideCounts(strand: string): { [key: string]: number } {
		if (strand.match(/[^ACGT]/))
			throw new Error('Invalid nucleotide in strand');
		const counts: { [key: string]: number } = {};
		for (const t of ['A', 'C', 'G', 'T']) {
			counts[t] = (strand.match(new RegExp(t, 'g')) || []).length;
		}
		return counts;
	}
}

export default NucleotideCount;
