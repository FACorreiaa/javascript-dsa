const levelOfOrder = (root) => {
	const res = [];

	function helper(node, depth) {
		if (!node) return;

		if (!res[depth]) {
			res[depth] = [];
		}

		res[depth].push(node.val);
		helper(node.left, depth + 1);
		helper(node.right, depth + 1);
	}

	helper(root, 0);
	return res;
};

//Time complexity O(N) We traverse throu every node
//Space complexity O(1)
