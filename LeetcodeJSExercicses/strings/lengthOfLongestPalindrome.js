//O(n) time using the "Sliding Window" approach to problem solving
//the sliding window will reprsent the current substring
const lengthOfLongestPalindrome = (s) => {
	let windowCharsMap = {};
	let windowStart = 0;
	let maxLength = 0;

	for (let i = 0; i < s.length; i++) {
		const endChar = s[i];

		if (windowCharsMap[endChar] >= windowStart) {
			windowStart = windowCharsMap[endChar] + 1;
		}

		windowCharsMap[endChar] = i;
		maxLength = Math.max(maxLength, i - windowStart + 1);
	}

	return maxLength;
};

//Time complexity: O(n) eacch character of the string needs to visited once
// Space complexity: O(min(m,n)) the number of keys in Hash Map is bounded by the size of the string n and the size of the charset/alphaset m
