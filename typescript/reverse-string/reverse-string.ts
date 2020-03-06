class ReverseString {
	static reverse(str: string): string {
		return [...str].reverse().join('');
	}
}

export default ReverseString;
