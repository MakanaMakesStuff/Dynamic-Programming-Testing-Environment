export function fib(n: number) {
	// we will initialize an array of length `n` where each item is `0`
	const res = Array(n + 1).fill(0);

	for (let i = 0; i < res.length; i++) {
		if (i == 0) continue;
		if (i == 1) {
			res[i] = 1;
			continue;
		}

		const num1 = res[i - 2];
		const num2 = res[i - 1];

		res[i] = num1 + num2;
	}

	return res.pop();
}

export function fibOptimized(n: number) {
	let num1 = 0,
		num2 = 1;

	// if n == 6
	// first iteration: num1 = 1; num2 = 1
	// second iteration num1 = 1; num2 = 2
	// third iteration num1 = 2; num2 = 3
	// forth iteration num1 = 3; num2 = 5
	// fifth iteration num1 = 5; num2 = 8
	for (let i = 2; i < n + 1; i++) {
		const temp = num2;
		num2 += num1;
		num1 = temp;
	}

	return num2;
}
