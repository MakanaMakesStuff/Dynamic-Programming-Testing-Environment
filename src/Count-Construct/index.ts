export function countConstruct(m: string, n: string[]): number {
	if (m == "") return 1;

	let count = 0;

	for (const word of n) {
		if (m.startsWith(word)) {
			const remainder = m.slice(word.length);

			count += countConstruct(remainder, n);
		}
	}

	return count;
}

export function countConstructMemo(
	m: string,
	n: string[],
	memo: Record<string, number> = {}
): number {
	if (m in memo) return memo[m];
	if (m == "") return 1;

	let count = 0;

	for (const word of n) {
		if (m.startsWith(word)) {
			const remainder = m.slice(word.length);

			const result = countConstructMemo(remainder, n, memo);

			memo[m] = count + result;
			count = count + result;
		}
	}

	memo[m] = count;

	return memo[m];
}
