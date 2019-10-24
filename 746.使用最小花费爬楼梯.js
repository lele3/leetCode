/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 *
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/description/
 *
 * algorithms
 * Easy (45.23%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    16.4K
 * Total Submissions: 36.4K
 * Testcase Example:  '[0,0,0,0]'
 *
 * 数组的每个索引做为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
 * 
 * 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
 * 
 * 您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
 * 
 * 示例 1:
 * 
 * 
 * 输入: cost = [10, 15, 20]
 * 输出: 15
 * 解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
 * 输出: 6
 * 解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
 * 
 * 
 * 注意：
 * 
 * 
 * cost 的长度将会在 [2, 1000]。
 * 每一个 cost[i] 将会是一个Integer类型，范围为 [0, 999]。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let res = []
    res[0] = cost[0]
    res[1] = cost[1]
    for(let i = 2, len = cost.length; i <= len; i++) {
      if(i === len) {
        res[i] = Math.min(res[i - 1], res[i - 2])  
      } else {
        res[i] = Math.min(res[i - 1], res[i - 2]) + cost[i]
      }
    }
    return res[cost.length]
};                                         
// @lc code=end

/*
  思路

  动态规划 动态规划是个什么鬼，一直不太懂
  
  感觉可以类比爬台阶，每次爬一步或者两步，总共有多少种爬法
  这个题目只不过需要一个数组去暂存爬到多少层所花费的体力

  因为每次只能爬一步或者爬两步，假设当前爬到n阶， 类比爬楼梯有多少种爬法
  则f(n) = Math.min(f(n - 1), f(n - 2)) + cost[n]
  当n为顶层时， cost[n] 为无效值，取 0，
  说人话就是 第n层所花费的体力值 = 第n-1层的体力值， 第n-2层的体力值 取最小值， 然后加上当前层所要花费的体力值
  如果是顶层， 当前层不需要花费体力，为0

  Accepted
  276/276 cases passed (64 ms)
  Your runtime beats 97.76 % of javascript submissions
  Your memory usage beats 14.49 % of javascript submissions (36 MB)
*/