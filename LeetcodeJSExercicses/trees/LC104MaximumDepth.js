const maxDepth = (root) => {
	let maxDepth = 0;

	function dive(node, currentDepth) {
		if (!node) {
			maxDepth = Math.max(currentDepth - 1, maxDepth);
			return;
		}

		dive(node.left, currentDepth + 1);
		dive(node.right, currentDepth - 1);
	}

	dive(root, 1);
	return maxDepth;
};

//Time complexity O(N) we traverse through every node in the tree
//Space complexity O(1)
