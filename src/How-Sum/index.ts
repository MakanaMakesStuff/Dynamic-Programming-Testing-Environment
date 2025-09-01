export function howSum(target: number, nums: number[]): number[] | null {
	if (target == 0) return [];
	if (target < 0) return null;

	for (const num of nums) {
		const result = howSum(target - num, nums);

		if (result != null) {
			return [...result, num];
		}
	}

	return null;
}

export function howSumMemo(
	target: number,
	nums: number[],
	memo: Record<number, number[] | null> = {}
): number[] | null {
	if (target in memo) return memo[target];

	if (target == 0) return [];
	if (target < 0) return null;

	for (const num of nums) {
		const result = howSumMemo(target - num, nums, memo);

		if (result != null) {
			memo[target] = [...result, num];
			return memo[target];
		}
	}

	memo[target] = null;

	return memo[target];
}
