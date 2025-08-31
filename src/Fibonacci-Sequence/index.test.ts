import { fib, fibMemo } from ".";

describe("Unoptimized Fibonacci Sequence Algorithm", () => {
	it("Get nth place of fib sequence", () => expect(fib(5)).toBe(5));
	it("Get nth place of fib sequence", () => expect(fib(7)).toBe(13));
});

describe("Optimized Fibonacci Sequence Algorithm", () => {
	it("Get nth place of fib sequence", () => expect(fibMemo(5)).toBe(5));
	it("Get nth place of fib sequence", () => expect(fibMemo(7)).toBe(13));
	it("Get nth place of fib sequence", () =>
		expect(fibMemo(50)).toBe(12586269025));
});
