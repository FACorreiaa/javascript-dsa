const setZeroes = (matrix) => {
	let firstColhasZero = false;
	let firstRowhasZero = false;

	//check if first col has zero
	for (let index = 0; index < matrix.length; index++) {
		if (matrix[i][0] === 0) {
			firstColhasZero = true;
			break;
		}
	}

	//check if first row has zero
	for (let index = 0; index < matrix[0].length; index++) {
		if (matrix[0][i] === 0) {
			firstRowhasZero = true;
			break;
		}
	}

	//use first row and column as flags
	//if rest of cells have zeros
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matix[0].length; col++) {
			if (matrix[row][col] === 0) {
				matrix[0][col] = 0;
				matrix[row][0] = 0;
			}
		}
	}

	//zero out cells based on flags in first row and column
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matix[0].length; col++) {
			if (matrix[row][0] === 0 || matrix[0][col] === 0) {
				matrix[row][col] = 0;
			}
		}
	}

	//
	if (firstColhasZero) {
		for (let i = 0; i < matrix.length; i++) {
			matrix[i][0] = 0;
		}
	}

	if (firstRowhasZero) {
		for (let i = 0; i < matrix[0].length; i++) {
			matrix[0][i] = 0;
		}
	}
};

//Time complexity O(NM where N and M are length and width of Matrix
//Space complexity O(1))
