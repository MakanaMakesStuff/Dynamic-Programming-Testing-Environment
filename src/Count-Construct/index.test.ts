import { countConstruct, countConstructMemo } from ".";

describe("Unoptimized Count Construct", () => {
	it("Return the number of possible way to concatenate form wordbank into our target string", () =>
		expect(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(
			1
		));
});

describe("Optimized Count Construct", () => {
	it("Return the number of possible way to concatenate form wordbank into our target string", () =>
		expect(
			countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])
		).toBe(1));
	it("Return the number of possible way to concatenate form wordbank into our target string", () =>
		expect(
			countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
				"e",
				"ee",
				"eee",
				"eeee",
				"eeeee",
				"eeeeee",
			])
		).toBe(0));
});
