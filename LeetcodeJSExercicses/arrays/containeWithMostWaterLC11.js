const maxArea = (height) => {
	let maxArea = 0;
	let start = 0;
	let end = height.lenghth - 1;

	while (start < end) {
		const currentArea = Math.min(height[(start, height[end])] * (end - start));
		maxArea = Math.max(currentArea, maxArea);

		if (height[start] < height[end]) {
			start++;
		} else {
			end++;
		}
	}

	return maxArea;
};

//Time complexity O(n) each number in input array is visited once
//Space complexity O(1)
