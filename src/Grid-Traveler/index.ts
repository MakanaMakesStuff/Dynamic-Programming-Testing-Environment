// if m or n is 0 then we need to return 0 because a grid of this dimension cannot exist
// if m and n are 1, then we know we have reached the top-left corner and can return 1 possible path
export const gridTraveler = (m: number, n: number): number => {
	if (m == 0 || n == 0) return 0;
	if (m == 1 && n == 1) return 1;
	return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

export const gridTravelerMemo = (
	m: number,
	n: number,
	memo: Record<string, number> = {}
): number => {
	// if this coordinate was already calculated, return its value
	if (`${m},${n}` in memo) return memo[`${m},${n}`];

	if (m == 0 || n == 0) return 0;
	if (m == 1 && n == 1) return 1;

	// set the coordinate value the return of our recursive call
	memo[`${m},${n}`] =
		gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);

	return memo[`${m},${n}`];
};

console.log(gridTravelerMemo(25, 30));
