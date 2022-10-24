const hasCycle = (head) => {
	let slow = head;
	let fast = head;

	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) {
			return true;
		}
	}

	return false;
};

//time complexity O(N) we traverse through the list
//space complexity  O(1) we always use two nodes
