/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode-cn.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (48.42%)
 * Likes:    65
 * Dislikes: 0
 * Total Accepted:    20.9K
 * Total Submissions: 43K
 * Testcase Example:  '"hello"'
 *
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 
 * 示例 2:
 * 
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 
 * 说明:
 * 元音字母不包含字母"y"。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const result = s.split('')
    let ans = []
    let len = s.length
    for(let i = 0; i < len; i++) {
      switch (result[i]) {
          case "a":
          case "e":
          case "i":
          case "o":
          case "u":
          case "A":
          case "E":
          case "I":
          case "O":
          case "U":
            ans.push(result[i])
      }
    }
    for (let i = 0; i < len; i++) {
        switch (result[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
                result[i] = ans.pop()
        }
    }
    return result.join('')
};
// @lc code=end

/**
 * 思路
 * 将字符串s转换为数组result
 * 设置两个指针low， high， 分别指向数组的起始和末尾
 * 设置一个数组，里面包含元音字母的大小写
 * 之后遍历result，判断result[low]和result[high]是否为元音字母
 * 如果不是的话指针分别++ 和--
 * 只有当result[low]和result[high]全部为元音字母时
 * 交换result[low]和result[high]
 * 当low >= high 时， 退出循环
 * 
 * 最后数组result转换为字符串，返回
 * 
 * 代码
 * const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
 *  let low = 0
 *  let high = s.length - 1
 *  const result = s.split('')
 *  while (low < high) {
 *    if (!vowel.includes(result[low])) {
 *      low++
 *    } else if (!vowel.includes(result[high])) {
 *      high--
 *    } else {
 *      let tmp = result[low]
 *      result[low] = result[high]
 *      result[high] = tmp
 *      low++
 *      high--
 *    }
 *  }
 *  return result.join('')
 * 
 * 
 * Accepted
 * 481/481 cases passed (88 ms)
 * Your runtime beats 79.52 % of javascript submissions
 * Your memory usage beats 78.95 % of javascript submissions (38.2 MB)
 */