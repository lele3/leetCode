/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (51.82%)
 * Likes:    544
 * Dislikes: 0
 * Total Accepted:    69.5K
 * Total Submissions: 133.4K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if(!digits) return []
  const mapNumToLetter = new Map([['2', ['a', 'b', 'c']], ['3', ['d', 'e', 'f']], ['4', ['g', 'h', 'i']], ['5', ['j', 'k', 'l']],
                                  ['6', ['m', 'n', 'o']], ['7', ['p', 'q', 'r', 's']], ['8', ['t', 'u', 'v']], ['9', ['w', 'x', 'y', 'z']]])
  const numArr = digits.split('')
  const letterArr = numArr.map(num => mapNumToLetter.get(num))
  let result = letterArr.reduce((res, cur) => {
    let tmp = []
    for(let oletter of res) {
      for(let iletter of cur) {
        tmp.push(oletter + iletter)
      }
    }
    return tmp
  })
  return result     
};
// @lc code=end

/**
 * 思路
 * 建立一个数字到字母的映射 mapNumToLetter
 * 将输入的数字字符串转换成 字母 数组
 * 之后利用 数组的 reduce 方法累加， 得到最后的结果 result
 * 
 * 时间复杂度 O(n^3)
 * 
 * Accepted
   25/25 cases passed (68 ms)
   Your runtime beats 38.68 % of javascript submissions
   Your memory usage beats 16.09 % of javascript submissions (33.8 MB)
 */