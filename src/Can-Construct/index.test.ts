import { canConstruct, canConstructMemo } from ".";

describe("Unoptimized Can Construct", () => {
	it("return true or false if target string can be constructed from any of the words within the string array(word bank)", () => {
		expect(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])).toBe(
			true
		);
	});
});

describe("Unoptimized Can Construct", () => {
	it("return true or false if target string can be constructed from any of the words within the string array(word bank)", () => {
		expect(
			canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
				"e",
				"ee",
				"eee",
				"eeee",
				"eeeee",
				"eeeeee",
			])
		).toBe(false);
	});
});
