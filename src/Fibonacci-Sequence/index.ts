export const fib = (n: number): number => {
	if (n <= 2) return 1;
	return fib(n - 1) + fib(n - 2);
};

export const fibMemo = (
	n: number,
	memo: Record<number, number> = {}
): number => {
	if (n in memo) return memo[n];

	if (n <= 2) return 1;

	memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

	return memo[n];
};
