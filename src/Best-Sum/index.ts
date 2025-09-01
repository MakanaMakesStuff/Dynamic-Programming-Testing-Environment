export function bestSum(targetSum: number, numbers: number[]): number[] | null {
	if (targetSum == 0) return [];
	if (targetSum < 0) return null;

	let shortestCombined: number[] | null = null;

	for (const num of numbers) {
		const remainder = targetSum - num;
		// we know that bestSum will return either an array or null because of our gaurd clauses at the top of this function
		// We will know if we have a path that leads to success if our base case returns an array
		// else then we know that the path is not viable
		const result = bestSum(remainder, numbers);

		// if the result is an empty array, we will concat each branch value until we fill up the array
		// This will create an array that contains all the values that add up to our targetSum
		if (result != null) {
			const combined = [...result, num];

			if (shortestCombined == null) {
				shortestCombined = combined;
			} else if (combined.length < shortestCombined.length) {
				shortestCombined = combined;
			}
		}
	}

	return shortestCombined;
}

export function bestSumMemo(
	targetSum: number,
	numbers: number[],
	memo: Record<string, number[] | null> = {}
): number[] | null {
	if (targetSum in memo) return memo[targetSum];

	if (targetSum == 0) return [];
	if (targetSum < 0) return null;

	let shortestCombined: number[] | null = null;

	for (const num of numbers) {
		const remainder = targetSum - num;
		// we know that bestSum will return either an array or null because of our gaurd clauses at the top of this function
		// We will know if we have a path that leads to success if our base case returns an array
		// else then we know that the path is not viable
		const result = bestSumMemo(remainder, numbers, memo);

		// if the result is an empty array, we will concat each branch value until we fill up the array
		// This will create an array that contains all the values that add up to our targetSum
		if (result != null) {
			const combined = [...result, num];

			if (shortestCombined == null) {
				shortestCombined = combined;
			} else if (combined.length < shortestCombined.length) {
				shortestCombined = combined;
			}
		}
	}

	memo[targetSum] = shortestCombined;

	return shortestCombined;
}
