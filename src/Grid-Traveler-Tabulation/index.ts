export function gridTravelerTabulated(m: number, n: number) {
	// if either dimension is 0 return early 0
	if (m == 0 || n == 0) return 0;

	const table = Array(m + 1)
		.fill(0)
		.map(() => Array(n + 1).fill(0));

	// after we initialize a 2d array of zeros, we need to set our smallest possible paths within a sub-grid of our 2d array

	/**
	 * [ ][ ][ ][ ]
	 * [ ][1][ ][ ]
	 * [ ][ ][ ][ ]
	 * [ ][ ][ ][ ]
	 */

	table[1][1] = 1;
	// we need to set this value otherwise our moving window won't have a number to increment by
	// now we need to loop through both dimensions, we can skip index 0 because they are negligible.
	for (let x = 1; x <= m; x++) {
		for (let y = 1; y <= n; y++) {
			// we can take the current array item and set its value to the sum of its neighbors(up or left)
			table[x][y] += table[x - 1][y] + table[x][y - 1];
		}
	}

	return table[m][n];
}

console.log(gridTravelerTabulated(3, 3));
