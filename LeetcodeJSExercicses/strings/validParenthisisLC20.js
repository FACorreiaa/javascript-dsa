const isValid = (s) => {
	let stack = [];
	let pairsHashMap = {
		'(': ')',
		'{': '}',
		'[': ']',
	};

	for (let i = 0; i < s.length; i++) {
		let char = s[i];

		if (pairsHashMap[char]) {
			stack.push(char);
		} else if (pairsHashMap[stack.pop()] !== char) {
			return false;
		}
	}

	return stack.length === 0;
};

// Time complexity: O(n) We itarete though input string just once
// Space complexity: O(n) in worst case, stack is same length as input stringt i
