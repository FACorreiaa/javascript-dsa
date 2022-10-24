const uniquePaths = (m, n) => {
	const dpMatrix = [];

	for (let row = 1; row <= n; row++) {
		dpMatrix.push([]);
	}

	//fill first row
	for (let row = 0; row < n; row++) {
		dpMatrix[row][0] = 1;
	}

	//fill first col
	for (let col = 0; col < m; col++) {
		dpMatrix[0][col] = 1;
	}

	for (let row = 1; row < n; row++) {
		for (let col = 1; col < m; col++) {
			dpMatrix[row][col] = dpMatrix[row][col - 1] + dpMatrix[row - 1][col];
		}
	}
	return dpMatrix[dpMatrix.length - 1][m - 1];
};

//Time complexity O(n.m) where N and M are dimensions of the matrix
//Space complexity O(n.m) dp matrix size depends on input matrix
