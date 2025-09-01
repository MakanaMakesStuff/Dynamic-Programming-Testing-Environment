export function canConstruct(m: string, n: string[]): boolean {
	if (m == "") return true;

	for (const word of n) {
		if (m.startsWith(word)) {
			const result = canConstruct(m.slice(word.length), n);

			if (result) {
				return result;
			}
		}
	}

	return false;
}

export function canConstructMemo(
	m: string,
	n: string[],
	memo: Record<string, boolean> = {}
): boolean {
	if (m in memo) return memo[m];
	if (m == "") return true;

	for (const word of n) {
		if (m.startsWith(word)) {
			const remainder = m.slice(word.length);

			const result = canConstructMemo(remainder, n, memo);

			if (result) {
				memo[m] = result;
				return result;
			}
		}
	}

	memo[m] = false;
	return memo[m];
}
