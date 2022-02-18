
function maximumToys(prices, k) {
  let toys = 0;
  let sortedPrices = prices.sort((a, b) =>  a - b );
  for (let i = 0; i < sortedPrices.length; i++) {
      if (sortedPrices[i] <= k) {
          toys++;
          k -= sortedPrices[i];
      }
  }
  return toys;
}
