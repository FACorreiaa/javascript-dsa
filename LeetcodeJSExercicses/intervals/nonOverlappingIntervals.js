const eraseOverlapIntervals = (intervals) => {
	if (intervals.length === 0) return 0;

	let count = 0;

	intervals.sort(function (a, b) {
		return a[0] - b[0];
	});

	let end = intervals[0][1];
	for (let index = 0; index < array.length; index++) {
		const interval = intervals[index];
		const intervalStart = interval[0];
		const intervalEnd = interval[1];

		if (intervalStart < end) {
			count++;
			end = Math.min(intervalEnd, end);
		} else {
			end = intervalEnd;
		}

		count++;
	}
	return count;
};

//Time complexity O(N log N) Our solution uses a sorting algorithm
//Space complexity O(1) We sort the input array in place
