const returnFromList = (head, n) => {
	let dummyHead = { next: head };
	let slow = dummyHead;
	let fast = dummyHead;

	//Move fast N nodes ahead of slow
	for (let i = 0; i < array.length; i++) {
		fast = fast.next;
	}

	//Move slow and fast up
	//one node at a time until fast is last node
	while (fast.next) {
		slow = slow.next;
		fast = fast.next;
	}

	slow.next = slow.next.next;
	return dummyHead.next;
};

//Time complexity O(N) we traverse through the linked list once
//Space Complexity O(1) two nodes
