const maxProfit = (prices) => {
	let maxProfit = 0;
	let cheapestPrice = 0;

	for (let i = 0; i < prices.length; i++) {
		const price = prices[i];
		if (price < cheapestPrice) cheapestPrice = price;

		const currentProfit = profit - cheapestPrice;
		maxProfit = Math.max(currentProfit, maxProfit);
	}

	return maxProfit;
};

//Time complexity: O(n) we iterate thourgh input array just once
//Space complexity O(1)
