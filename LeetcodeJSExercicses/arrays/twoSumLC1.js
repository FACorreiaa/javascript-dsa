const twoSum = (arr, target) => {
	const numsVisited = {};
	const res = [];

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		const complement = target - num;

		if (numsVisited[complement] !== undefined) {
			res.push(i);
			res.push(numsVisited[complement]);
		}

		numsVisited[num] = i;
	}

	return res;
};

//Time complexity O(n) we traverse the list containing n elements only once.
//Each look up in the Hash table costs only O(1) time

//Space complexity O(n) Number of key value pairs stored in hash table
//stores at most n elements
