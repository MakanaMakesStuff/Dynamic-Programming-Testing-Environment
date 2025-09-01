export function canSum(num: number, nums: number[]): boolean {
	if (num == 0) return true;
	if (num < 0) return false;

	for (const n of nums) {
		if (canSum(num - n, nums)) {
			return true;
		}
	}

	return false;
}

export function canSumMemo(
	num: number,
	nums: number[],
	memo: Record<number, boolean> = {}
): boolean {
	if (num in memo) return memo[num];
	if (num == 0) return true;
	if (num < 0) return false;

	for (const n of nums) {
		if (canSumMemo(num - n, nums, memo)) {
			memo[num - n] = true;
			return true;
		} else {
			memo[num - n] = false;
		}
	}

	return false;
}
