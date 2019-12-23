/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (42.20%)
 * Likes:    164
 * Dislikes: 0
 * Total Accepted:    53.6K
 * Total Submissions: 127K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var obj = {}
    for(let i = 0, len = s.length; i < len; i++) {
      let key = s.charAt(i)
      if (obj[key] !== undefined) {
        obj[key]++
      } else {
        obj[key] = 0
      }
    }
    for(let i = 0, len = s.length; i < len; i++) {
      let key = s.charAt(i)
      if (obj[key] === 0) return i
    }
    return -1
};

/**
 * 思路
 * 方法一
 * 
 *  Accepted
 *  104/104 cases passed (108 ms)
 *  Your runtime beats 60.32 % of javascript submissions
 *  Your memory usage beats 85.88 % of javascript submissions (37.4 MB)
 * 
 *  时间复杂度 假设indexOf和lastIndexOf 是 O(n), 那么整体应该是O(n^2)
 *  for(let i = 0, len = s.length; i < len; i++) {
      let char = s.charAt(i)
      if (s.indexOf(char) === s.lastIndexOf(char)) {
        return i
      }
    }
    return -1
 */

 /**
  * 方法二
  * 
  * 遍历字符串，计算每个字母的个数，存储到对象obj中，然后找出第一个个数不是0的元素
  * 再通过indexOf找到在源字符串s中的位置
  *  
  * Accepted
  * 104/104 cases passed (112 ms)
  * Your runtime beats 51.62 % of javascript submissions
  * Your memory usage beats 40 % of javascript submissions (38 MB)
  * 
  * 时间复杂度 O(n)
  * var obj = {}
    for(let i = 0, len = s.length; i < len; i++) {
      let key = s.charAt(i)
      if (obj[key] !== undefined) {
        obj[key]++
      } else {
        obj[key] = 0
      }
    }
    for(let i = 0, len = s.length; i < len; i++) {
      let key = s.charAt(i)
      if (obj[key] === 0) return i
    }
    return -1
  */
// @lc code=end

