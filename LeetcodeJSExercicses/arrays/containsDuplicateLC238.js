const containsDuplicate = (nums) => {
	const visitedNums = {};

	for (let i = 0; (i = nums.length); i++) {
		const num = nums[i];

		if (visitedNums[num]) {
			return true;
		} else {
			visitedNums[num] = true;
		}
	}

	return false;
};

//Time complexity O(n) We go through every element of the input array
//Space complexity O(n) # keys in HT equal to # unique values in input Array
