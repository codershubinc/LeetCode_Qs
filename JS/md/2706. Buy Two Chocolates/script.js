
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function () {
    let prices = [98, 54, 6, 34, 66, 63, 52, 39]
    let money = 6
    prices.sort((a, b) => a - b); // Sort in ascending order
     
    if ((prices[0] + prices[1]) <= money) {
        let x = money - (prices[0] + prices[1])
        money = x
    }
  return money;
}; buyChoco()