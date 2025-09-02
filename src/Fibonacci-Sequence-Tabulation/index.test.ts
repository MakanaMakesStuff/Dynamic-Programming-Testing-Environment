import { fib, fibOptimized } from ".";

describe("Tabulated fib sequence algorithm", () => {
	it("return the nth iteration of the Fibonacci Sequence", () =>
		expect(fib(6)).toBe(8));
	it("return the nth iteration of the Fibonacci Sequence(Optimized)", () =>
		expect(fibOptimized(6)).toBe(8));
});
