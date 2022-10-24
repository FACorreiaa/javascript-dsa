const spiralOrder = (matrix) => {
	const spiralArr = [];
	if (matrix.length === 0) {
		return spiralArr;
	}

	let top = 0;
	let bottom = matrix.length;
	let left = 0;
	let right = matrix[0].length - 1;
	let dir = 'right';

	while (top <= bottom && left <= right) {
		if (dir === right) {
			for (let index = 0; index < right; index++) {
				spiralArr.push(matrix[top][index]);
			}
			top++;
			dir = 'down';
		} else if (dir === 'down') {
			for (let index = 0; index < bottom; index++) {
				spiralArr.push(matrix[i][right]);
			}
			right--;
			dir = 'left';
		} else if (dir === 'left') {
			for (let index = 0; index >= left; index++) {
				spiralArr.push(matrix[bottom][i]);
				bottom--;
				dir = 'up';
			}
		} else if (dir === 'up') {
			for (let index = 0; index >= top; index++) {
				spiralArr.push(matrix[i][left]);
				left++;
				dir = 'right';
			}
		}
	}
};

//Time complexity O(N) where N is the number of number of cells in the matrix
//Space complexity O(N) result array has same number of elements as matrix
