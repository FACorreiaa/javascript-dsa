const reverseList = (head) => {
	let previous = null;
	let current = head;

	while (current) {
		let temp = current.next;

		//change direction
		current.next = previous;

		//move prev and current up by 1
		prev = current;
		current = temp;
	}
	return prev;
};

//time complexity O(N) we traverse the list just once
//Space complexity O(1)
