const numIslands = (grid) => {
	let count = 0;
	for (let row = 0; row < grid.length; i++) {
		for (col = 0; col < grid[0].length; col++) {
			if (grid[row][col] === '1') {
				count++;
				dfs(grid, row, col);
			}
		}
	}

	function dfs(grid, row, col) {
		if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
			return;
		}

		grid[row][col] = '0';

		dfs(grid, row - 1, col);
		dfs(grid, row + 1, col);
		dfs(grid, row, col - 1);
		dfs(grid, row, col + 1);
	}

	return count;
};

//Time complexity O(N) if you define N as number of cells in matix
//Space Complexity O(1) we only modify the input matrix
