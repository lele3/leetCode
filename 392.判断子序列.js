/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 *
 * https://leetcode-cn.com/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (47.77%)
 * Likes:    74
 * Dislikes: 0
 * Total Accepted:    13.6K
 * Total Submissions: 28.5K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 * 
 * 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
 * 
 * 
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * 
 * 示例 1:
 * s = "abc", t = "ahbgdc"
 * 
 * 返回 true.
 * 
 * 示例 2:
 * s = "axc", t = "ahbgdc"
 * 
 * 返回 false.
 * 
 * 后续挑战 :
 * 
 * 如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T
 * 的子序列。在这种情况下，你会怎样改变代码？
 * 
 * 致谢:
 * 
 * 特别感谢 @pbrother 添加此问题并且创建所有测试用例。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    /*
      方法二
      利用双指针， i，j分别指向s和t的开头
      循环遍历， 循环退出条件是有s和t字符串有一方遍历完
      如果s的第i个字符和t的第j个字符相同，则i++, j++
      如果不相等 j++
      如果循环退出以后， i的大小等于s.length说明s是t的子字符串
      反之，不是，返回false


      Accepted
      14/14 cases passed (104 ms)
      Your runtime beats 26.09 % of javascript submissions
      Your memory usage beats 6.25 % of javascript submissions (39.2 MB)
    */
    let i = 0, j = 0
    while (s.charAt(i) && t.charAt(j)) {
      if(s.charAt(i) === t.charAt(j)) {
        i++
      }
      j++
    }
    if(i === s.length) return true
    return false
};
// @lc code=end

/*
  思路
  方法一
  遍历s字符串的每一个字符，通过js原生API indexOf 找到每个字符在字符串t中的位置

  1. 找到字符串s中第一个字符在字符串t中的位置（从index+1位置开始查找），并赋值给变量index
  2. 如果index为 -1， 说明没有找到， 不符合条件， 返回false
  3. 如果index不等于-1，重复步骤1， 2
  4. 如果for循环执行完，说明符合条件， s是t的子字符串， 返回true

  let index = -1
  for(let i = 0, len = s.length; i < len; i++) {
    let char = s.charAt(i)
    index = t.indexOf(char, index + 1)
    if(index === -1) return false
  }
  return true
  
  时间复杂度 O(n)

  Accepted
  14/14 cases passed (68 ms)
  Your runtime beats 95.99 % of javascript submissions
  Your memory usage beats 93.75 % of javascript submissions (37.8 MB)
*/ 
