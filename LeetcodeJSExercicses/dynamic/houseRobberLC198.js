const houseRobber = (nums) => {
	if (nums.length === 0) return 0;
	if (nums.length === 1) return nums[0];
	if (nums.length === 2) return Math.max(nums[0], nums[1]);

	let maxLootAtNth = [nums[0], Math.max(nums[0], nums[1])];

	for (let i = 2; i < nums.length; i++) {
		maxLootAtNth.push(
			Math.max(nums[i] + maxLootAtNth[i - 2], maxLootAtNth[i - 1])
		);
	}
	return maxLootAtNth.pop();
};

//Time complexity O(n)
//Space complexity O(n) can be optimized to O(1) with the use of two variables
