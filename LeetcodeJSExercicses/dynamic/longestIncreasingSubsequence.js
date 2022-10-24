const lengthOfLis = (nums) => {
	if (nums.length === 0) return 0;

	let dpSubSequence = new Array(nums.length).fill(1);
	let maxSoFar = 1;

	for (let j = 1; j < nums.length; j++) {
		for (let i = 0; i < j; i++) {
			if (nums[j] > nums[i]) {
				dpSubSequence[j] = Math.max(dpSubSequence[i] + 1, dpSubSequence[j]);
			}
		}

		maxSoFar = Math.max(maxSoFar, dpSubSequence[j]);
	}
	return maxSoFar;
};

//Time complexity O(n2) we do up to N work for all N alements
//Space complexity O(n) we store the answear up to N sub problems
