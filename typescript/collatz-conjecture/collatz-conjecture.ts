class CollatzConjecture {
	static steps(n: number): number {
		// Take any positive integer n.
		if (n <= 0) throw new Error('Only positive numbers are allowed');
		if (n === 1) return 0;
		// If n is odd, multiply n by 3 and add 1 to get 3n + 1.
		if (n % 2) return 1 + this.steps(n * 3 + 1);
		// If n is even, divide n by 2 to get n / 2.
		return 1 + this.steps(n / 2);
	}
}

export default CollatzConjecture;
