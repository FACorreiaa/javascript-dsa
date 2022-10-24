function describe(testSuitName, func) {
	console.log(`beginning test suite ${testSuiteName}`);

	try {
		func();
	} catch (error) {
		const { testCaseName, errorMessage } = error;
		console.error(
			`failed running test suite ${testSuitName} on` +
				`test case ${testCaseName} with error message ${errorMessage}`
		);
	}
}

function it(testCaseName, func) {
	console.log(`beginning test case ${testCaseName}`);

	try {
		func();
		console.log(`Successufyly completed test case ${testCaseName}`);
	} catch (errorMessage) {
		throw {
			testCaseName,
			errorMessage,
		};
	}
}

function expect(actual) {
	return new ExpectFuncions(actual);
}

class ExpectFunctions {
	constructor(actual) {
		this.actual = actual;
		this.stringifiedActual = JSON.stringify(actual);
	}

	toExist() {
		if (this.actual == null) {
			throw `expect value to exist but got ${this.stringifiedActual}`;
		}
	}

	toBe(expected) {
		if (this.actual !== expected) {
			throw `expect ${this.stringifiedActual} to be ${JSON.stringify(
				expected
			)}`;
		}
	}

	toBeType(type) {
		if (typeof this.actual !== type) {
			throw `expected ${this.stringifiedActual} to be type ${type}`;
		}
	}
}
