/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * 
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

注意你不能在买入股票前卖出股票。

示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length === 0) return 0
  let max = 0
  let min = 0
  prices.forEach((price, i) => {
    if (i === 0) {
      max = 0
      min = price
    }
    else {
      min = Math.min(min, price)
      max = Math.max(max, price - min)
    }
  })
  return max
  /**
    方法二
    
    思路
    将思路一中的取最大值和最小值的逻辑修改了一下， 存储起来， 不需要每次都是用 slice 求取
    
    ✔ Accepted
    ✔ 200/200 cases passed (68 ms)
    ✔ Your runtime beats 99.29 % of javascript submissions
    ✔ Your memory usage beats 92.76 % of javascript submissions (35 MB)
  */
};


/*
  方法一：
    if(prices.length === 0) return 0
    const profitArr = []
    prices.forEach((price, i) => {
      if(i === 0) profitArr.push(0)
      else {
        let min = Math.min(...prices.slice(0, i))
        profitArr.push(price - min)
      }
    })
    return Math.max(...profitArr)

  
  思路：
    当天的利润等于 当天的价格减去之前价格的最小值，将利润存储起来
    最后输出利润数组中的最大值
  
  执行时间烂到家了
  Accepted
  ✔ 200/200 cases passed (1400 ms)
  ✔ Your runtime beats 5.06 % of javascript submissions
  ✔ Your memory usage beats 5.01 % of javascript submissions (42.3 MB)
 */
