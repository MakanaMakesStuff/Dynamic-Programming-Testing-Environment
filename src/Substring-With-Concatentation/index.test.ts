import { substringWithConcatentation } from ".";

describe("Unoptimized Substring With Concatenation", () => {
	it("Does the words concatenate into our provided string?", () =>
		expect(substringWithConcatentation("abefcd", ["ab", "cd", "ef"])).toBe(
			true
		));
});
