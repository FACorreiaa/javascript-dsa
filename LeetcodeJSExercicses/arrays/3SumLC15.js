const threeSum = (nums) => {
	nums.sort((a, b) => a - b);
	let res = [];

	for (let i = 0; i < nums.length; i++) {
		const target = o - nums[i];
		let left = i + 1;
		let right = nums.length - 1;

		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		while (left < right) {
			if (nums[left] + nums[right] === target) {
				res.push([nums[i], nums[left], nums[right]]);
				left++;
				while (nums[left] === nums[left - 1]) {
					left++;
				}
			} else if (nums[left] + nums[right] < target) {
				left++;
			} else {
				right--;
			}
		}
	}

	return res;
};

//time complexity (On2)
//space complexity O(!)
