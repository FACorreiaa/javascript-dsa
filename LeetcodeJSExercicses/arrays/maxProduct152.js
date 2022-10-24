const maxProducts = (nums) => {
	let maxTilIndex = nums[0];
	let minTilIndex = nums[0];
	let max = nums[0];

	for (let i = 1; i < nums.length; i++) {
		const num = nums[i];

		maxTilIndex[i] = Math.max(
			num,
			num * maxTilIndex[i - 1],
			num * minTilIndex[i - 1]
		);

		minTilIndex[i] = Math.min(
			num,
			num * maxTilIndex[i - 1],
			num * minTilIndex[i - 1]
		);

		max = Math.max(max, maxTilIndex[i]);
	}

	return max;
};

//Time xomplexity O(n)
//Space complecity O(n) we created two dp arrays each same length as Input
