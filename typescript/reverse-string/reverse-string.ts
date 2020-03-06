class ReverseString {
	static reverse(str: string): string {
		return str === '' ? '' : this.reverse(str.substr(1)) + str.charAt(0);
	}
}

export default ReverseString;
