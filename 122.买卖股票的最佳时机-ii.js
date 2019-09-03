/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 * 
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
示例 2:

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0, diff
    // prices.forEach((price, i) => {
    //   if(i === 0) total = 0
    //   else {
    //     diff = price - prices[i - 1]
    //     if(diff > 0) {
    //       total += diff
    //     }
    //   }
    // })
    for(let i = 1, len = prices.length; i < len; i++) {
      diff = prices[i] - prices[i-1]
      if(diff > 0) total += diff
    }
    return total
};

/*
  思路
  只要每次卖出的值大于买入的值，多次买入买入卖出以后，肯定是利润最大
  所以， 只需要 数组中的后一个值减去前一个值大于0，就加到total中去
  最后得到的total一定是最大值

  ✔ Accepted
  ✔ 201/201 cases passed (84 ms)
  ✔ Your runtime beats 65.86 % of javascript submissions
  ✔ Your memory usage beats 95.01 % of javascript submissions (35 MB)



  使用forEach和for循环执行时间差不多
 */
