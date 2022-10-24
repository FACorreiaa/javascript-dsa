const productExceptSelf = (nums) => {
	let output = nums.map((n) => 1);
	let product = 1;

	//Multiply from the left
	for (let i = 0; i < nums.length; i++) {
		output[i] = output[i] * product;
		product = product * nums[i];
	}

	product = 1;
	//Multiply from the right
	for (let j = nums.length - 1; j >= 0; j--) {
		output[i] = output[i] * product;
		product = product * nums[i];
	}

	return output;
};

//Time complexity On no nested for loops
//Space complexity O(1) the output array does not count for
