export function substringWithConcatentation(s: string, words: string[]) {
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		const wordsCopy = [word, ...words.filter((w) => w != word)];

		for (let y = 0; y < wordsCopy.length; y++) {
			if (s.includes(wordsCopy.join(""))) {
				return true;
			}

			const copy = wordsCopy[y + 1];

			if (!copy) break;

			wordsCopy[y] = copy;
			wordsCopy[y + 1] = word;
		}
	}

	return false;
}
