import { allConstruct, allConstructMemo } from ".";

describe("Unoptimized All Construct", () => {
	it("return array of possible ways to concatenate into our target string", () =>
		expect(
			allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
		).toStrictEqual([
			["ab", "cd", "ef"],
			["ab", "c", "def"],
			["abc", "def"],
			["abcd", "ef"],
		]));
	it("return array of possible ways to concatenate into our target string", () =>
		expect(
			allConstruct("purple", ["purp", "p", "ur", "le", "purpl"])
		).toStrictEqual([
			["purp", "le"],
			["p", "ur", "p", "le"],
		]));
});

describe("Optimized All Construct", () => {
	it("return array of possible ways to concatenate into our target string", () =>
		expect(
			allConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
		).toStrictEqual([
			["ab", "cd", "ef"],
			["ab", "c", "def"],
			["abc", "def"],
			["abcd", "ef"],
		]));
	it("return array of possible ways to concatenate into our target string", () =>
		expect(
			allConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"])
		).toStrictEqual([
			["purp", "le"],
			["p", "ur", "p", "le"],
		]));
	it("return array of possible ways to concatenate into our target string", () =>
		expect(
			allConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
				"e",
				"ee",
				"eee",
				"eeee",
				"eeeee",
				"eeeeee",
			])
		).toStrictEqual([]));
});
