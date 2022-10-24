const lowestCommonAncestor = (root, p, q) => {
	const pVal = p.val;
	const qVal = q.val;

	let currentNode = root;

	while (currentNode) {
		const currentVal = currentNode.val;

		if (currentVal < pVal && currentVal < qVal) {
			currentNode = currentNode.right;
		} else if (currentVal > pVal && currentVal > qVal) {
			currentNode = currentNode.left;
		} else {
			return currentNode;
		}
	}
};

//Time complexity O(N) worst case, we tarverse throught every node
//Space complexity O(1) we always use one node, regardless of size BST
