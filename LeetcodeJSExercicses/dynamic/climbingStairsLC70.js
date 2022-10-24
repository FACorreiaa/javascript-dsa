const climbingStairs = (n) => {
	if (n <= 3) return n;
	let ways = [0, 1, 2, 3];

	for (let i = 4; i <= n; i++) {
		ways.push(ways[i - 1] + ways[i - 2]);
	}

	return ways.pop();
};

//Time complexity (On) our code loops n times
//Space complexity (On) array of N size is used
const altClimbingStairs = (n) => {
	if (n <= 3) return n;

	let first = 1;
	let first = 2;
	for (let i = 3; i <= n; i++) {
		const third = first + second;
		first = second;
		second = third;
	}

	return second;

	//O(1)
};
