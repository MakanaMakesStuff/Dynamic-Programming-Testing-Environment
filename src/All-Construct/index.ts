export function allConstruct(m: string, n: string[]): string[][] {
	if (m == "") return [[]];

	const combined: string[][] = [];

	for (const word of n) {
		if (m.startsWith(word)) {
			const remainder = m.slice(word.length);

			const result = allConstruct(remainder, n).map((way) => [word, ...way]);

			combined.push(...result);
		}
	}

	return combined;
}

export function allConstructMemo(
	m: string,
	n: string[],
	memo: Record<string, string[][]> = {}
): string[][] {
	if (m in memo) return memo[m];
	if (m == "") return [[]];

	const combined: string[][] = [];

	for (const word of n) {
		if (m.startsWith(word)) {
			const remainder = m.slice(word.length);

			const result = allConstructMemo(remainder, n, memo).map((way) => [
				word,
				...way,
			]);

			combined.push(...result);

			memo[m] = result;
		}
	}

	memo[m] = combined;

	return memo[m];
}
