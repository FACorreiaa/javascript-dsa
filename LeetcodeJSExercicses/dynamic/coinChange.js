const coinChange = (coins, amount) => {
	let dpMinCoins = new Array(amount + 1).fill(Infinity);
	dpMinCoins[0] = 0;

	for (let i = 1; i < dpMinCoins.length; i++) {
		for (let j = 0; j < coins.length; j++) {
			const coinValue = coins[j];
			if (coinValue <= 1) {
				dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins);
			}
		}
	}
	const answear = dpMinCoins[dpMinCoins.length - 1];
	return answear === Infinity ? -1 : answear;
};

//Time complexity O(A.C) Where A is amount and C is number of coins
//Space complexity O(A) We created a DP array of length A
