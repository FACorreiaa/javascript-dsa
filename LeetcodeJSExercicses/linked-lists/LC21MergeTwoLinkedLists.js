const mergeTwoLists = (l1, l2) => {
	const dummyHead = { next: null };
	let tail = dummyHead;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			tail.next = l1;
			tail = tail.next;
			l1 = l1.next;
		} else {
			tail.next = l2;
			tail = tail.next;
			l2 = l2.next;
		}
	}

	tail.next = l1 || l2;
	return dummyHead.next;
};

//Time complexity O (NM) Where N and M are lengths of Linked Lists
//Space complexity O(!)
