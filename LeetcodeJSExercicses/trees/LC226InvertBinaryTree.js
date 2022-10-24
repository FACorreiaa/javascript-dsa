const invertTree = (root) => {
	function helper(node) {
		if (!node) return;

		const temp = node.left;
		node.left = node.right;
		node.right = temp;

		helper(node.left);
		helper(node.right);
	}

	helper(root);
	return;
};

//Time complexity O(N) we traverse through every Node in the tree
//Space complexity O(1)
