const isSameTree = (p, q) => {
	let sameTree = true;

	function checkSameNode(p, q) {
		if (!p && !q) {
			return;
		} else if (!p || !q) {
			sameTree = false;
			return;
		} else if (p.val !== q.val) {
			sameTree = false;
			return;
		}

		checkSameNode(p.left, q.left);
		checkSameNode(p.right, q.right);
	}
	checkSameNode(p, q);
	return sameTree;
};

//Time complexity O(P+Q) where p and q are number of nodes in input tree
//Space complexity O(1)
