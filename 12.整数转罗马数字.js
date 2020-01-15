/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 *
 * https://leetcode-cn.com/problems/integer-to-roman/description/
 *
 * algorithms
 * Medium (62.13%)
 * Likes:    256
 * Dislikes: 0
 * Total Accepted:    59.9K
 * Total Submissions: 96.2K
 * Testcase Example:  '3'
 *
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * 
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V +
 * II 。
 * 
 * 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数
 * 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 * 
 * 
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 
 * 
 * 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 * 
 * 示例 1:
 * 
 * 输入: 3
 * 输出: "III"
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "IV"
 * 
 * 示例 3:
 * 
 * 输入: 9
 * 输出: "IX"
 * 
 * 示例 4:
 * 
 * 输入: 58
 * 输出: "LVIII"
 * 解释: L = 50, V = 5, III = 3.
 * 
 * 
 * 示例 5:
 * 
 * 输入: 1994
 * 输出: "MCMXCIV"
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // let object = {
  //   1000: 'M',
  //   900: 'CM',
  //   500: 'D',
  //   400: 'CD',
  //   100: 'C',
  //   90: 'XC',
  //   50: 'L',
  //   40: 'XL',
  //   10: 'X',
  //   9: 'IX',
  //   5: 'V',
  //   4: 'IV',
  //   3: 'III',
  //   2: 'II',
  //   1: 'I',
  // }

  /**
   * 优化后的代码， 注释的是优化之前的代码
   */
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 3, 2, 1]
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'III', 'II', 'I']
  let resStr = ''
  let sum = 0
  while (sum !== num) {
    for(let i in nums) {
      if (sum + nums[i] <= num) {
        sum += nums[i]
        resStr += roman[i]
        break
      }
    }
    // if((sum + 1000) <= num) {
    //   resStr += object[1000]
    //   sum += 1000
    // } else if ((sum + 900) <= num) {
    //   resStr += object[900]
    //   sum += 900
    // } else if ((sum + 500) <= num) {
    //   resStr += object[500]
    //   sum += 500
    // } else if ((sum + 400) <= num) {
    //   resStr += object[400]
    //   sum += 400
    // } else if ((sum + 100) <= num) {
    //   resStr += object[100]
    //   sum += 100
    // } else if ((sum + 90) <= num) {
    //   resStr += object[90]
    //   sum += 90
    // } else if ((sum + 50) <= num) {
    //   resStr += object[50]
    //   sum += 50
    // } else if ((sum + 40) <= num) {
    //   resStr += object[40]
    //   sum += 40
    // } else if ((sum + 10) <= num) {
    //   resStr += object[10]
    //   sum += 10
    // } else if ((sum + 9) <= num) {
    //   resStr += object[9]
    //   sum += 9
    // } else if ((sum + 5) <= num) {
    //   resStr += object[5]
    //   sum += 5
    // } else if ((sum + 4) <= num) {
    //   resStr += object[4]
    //   sum += 4 
    // } else if ((sum + 3) <= num) {
    //   resStr += object[3]
    //   sum += 3
    // } else if ((sum + 2) <= num) {
    //   resStr += object[2]
    //   sum += 2
    // } else if ((sum + 1) <= num) {
    //   resStr += object[1]
    //   sum += 1
    // }
  }
  return resStr
}
// @lc code=end

/**
 * 思路
 * 先做一个数字和罗马数字的映射存储在object对象中
 * 
 * 初始化一个sum=0，每次累加特殊的罗马字符所代表的数字
 * 与目标值num作对比，只有当sum === num时， 退出循环
 *  
 * Accepted
   3999/3999 cases passed (152 ms)
   Your runtime beats 88.88 % of javascript submissions
   Your memory usage beats 31.85 % of javascript submissions (42 MB)
 */