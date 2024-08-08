/**
 * Time Complexity: O(n * m)
 * 
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxNum = 0;

    for (let i of accounts) {
        let sumOfMoney = i.reduce((acc, cur) => acc + cur, 0);

        if (sumOfMoney > maxNum) {
            maxNum = sumOfMoney;
        }
    }

    return maxNum;
};
