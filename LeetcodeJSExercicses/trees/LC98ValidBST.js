const isValidBST = (root) => {
	let valid = true;

	function helper(node, min, max) {
		if (!node) return;

		if (
			(min !== null && node.val <= min) ||
			(max !== null && node.val >= max)
		) {
			valid = false;
			return;
		}
		helper(node.left, min, node.val);
		helper(node.right, node.val, max);
	}
	helper(root, null, null);
	return valid;
};

//Time complexity O(N) we traverse through every node
//Sace complexity
