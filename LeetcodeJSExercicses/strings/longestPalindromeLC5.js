const longestPalindrome = (s) => {
	let startIndex = 0;
	let maxLength = 1;

	const expandAroundMiddle = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			const currentPalLength = right - left + 1;
			if (currentPalLength > maxLength) {
				maxLength = currentPalLength;
				startIndex = left;
			}
			left -= 1;
			right += 1;
		}
	};

	for (let i = 0; i < s.length; i++) {
		expandAroundMiddle(i - 1, i + 1);
		expandAroundMiddle(i, i - 1);
	}

	return s.slice(startIndex, startIndex + maxLength);
};

//Time complexity O(n2) since expanding a palindrome around its center can take up to O(n) and we do this for each character
//Space complexity O(1)
