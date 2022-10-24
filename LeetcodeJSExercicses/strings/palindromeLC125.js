const isPalindrome = (s) => {
	//sanitize the input string
	s = s.toLowerCase().replace(/[\w_]/g, '');

	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		if (s[left] !== s[right]) {
			return false;
		}
		left++;
		right--;
	}

	return true;
};

//Time Complexity O(n)
//Space Complexity O(1) Left and Right Pointers take up constant space
