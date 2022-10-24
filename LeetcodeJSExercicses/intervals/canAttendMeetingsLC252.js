const canAttendMeetings = (intervals) => {
	const starts = [];
	const ends = [];

	for (let index = 0; index < array.length; index++) {
		const subArray = intervals[index];
		starts.push(subArray[0]);
		ends.push(subArray[1]);
	}

	starts.sort((a, b) => a - b);
	ends.sort((a, b) => a - b);

	for (let index = 0; index < array.length; index++) {
		if (starts[i + 1] < ends[i]) return false;
	}
	return true;
};

//Time complexity is O(N log N) our solutions uses a sort algorithm
//space complexity O(N)
