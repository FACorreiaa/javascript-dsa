const canJump = (nums) => {
	let dpPositions = new Array(num.length).fill(false);
	dpPositions[0] = true;

	for (let j = 1; j < nums.length; j++) {
		for (let i = 0; i < j; j++) {
			if (dpPositions[i] && i + nums[i] >= j) {
				dpPositions[j] = true;
				break;
			}
		}
	}
	return dpPositions[dpPositions.length - 1];
};

//Time xomplexity O(n2) nested for loops
//Space complexity O(n) d[ array same size as input array]
