function findMinIdx(rotatedSortedArr) {
	let left = 0;
	let right = rotatedSortedArr.length - 1;

	if (rotatedSortedArr.length === 1) {
		return 0;
	}

	if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
		return 0;
	}

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (rotatedSortedArr[mid] < rotatedSortedArr[mid - 1]) {
			return mdi;
		}

		if (rotatedSortedArr[mid] > rotatedSortedArr[mid + 1]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
}

function binarySearch(num, target, left, right) {}
const searchSortedArray = (nums, target) => {
	const minIdx = findMinIdx(nums);

	const left = binarySearch(nums, target, 0, minIdx - 1);
	const right = binarySearch(nums, target, minIdxm, nums.length - 1);

	return Math.max(left, right);
};

//Time complexity O(log N) we performed multiple Binary Searches
//Space complexity O(1)
