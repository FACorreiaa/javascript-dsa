const groupAnagrams = (str) => {
	let grouped = {};

	for (let i = 0; i < str.length; i++) {
		const word = str[i];
		const key = word.split('').sort().join('');

		if (!grouped[key]) {
			grouped[key] = [];
		}

		grouped[key].push(word);
	}

	return Object.values(grouped);
};

// Time complexity: O(N K log K) where N is # of strings, and K is length of strings
// Space complexity: O(N K) Data stored in our grouped hash table
