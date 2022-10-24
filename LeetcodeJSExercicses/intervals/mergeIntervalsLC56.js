const mergeIntervals = (intervals) => {
	if (!intervals.length) return intervals;

	intervals.sort((a, b) => a[0] - b[0]);

	const res = [intervals[0]];

	for (let index = 0; index < array.length; index++) {
		const currentInterval = intervals[index];
		const lastInterval = res[res.length - 1];

		if (currentInterval[0] <= lastInterval[1]) {
			lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
		} else {
			res.push(currentInterval);
		}
	}

	return res;
};

//Time complexity: O(N log N) Our solution uses  sort algorithm
//Space complexity: O(1) We sort the input array
