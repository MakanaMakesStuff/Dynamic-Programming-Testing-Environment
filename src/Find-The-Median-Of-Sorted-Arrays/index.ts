export const findMedian = (nums1: number[], nums2: number[]) => {
	const sorted = [...nums1, ...nums2].sort((a, b) => a - b);

	return sorted.length % 2 == 0
		? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
		: sorted[Math.floor(sorted.length / 2)];
};
