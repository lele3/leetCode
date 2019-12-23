/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 *
 * https://leetcode-cn.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (68.17%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    96.3K
 * Total Submissions: 141.2K
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 * 
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 * 
 * 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：["h","e","l","l","o"]
 * 输出：["o","l","l","e","h"]
 * 
 * 
 * 示例 2：
 * 
 * 输入：["H","a","n","n","a","h"]
 * 输出：["h","a","n","n","a","H"]
 * 
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let high = s.length - 1
    let low = 0
    while (low < high) {
      let tmp = s[high]
      s[high] = s[low]
      s[low] = tmp
      // [s[high], s[low]] = [s[low], s[high]] // 执行效率比较低
      low ++
      high --
    }
};
// @lc code=end

/**
 * 方法一
 * 直接调用数组的 reverse 函数
 * 
 * Accepted
 * 478/478 cases passed (128 ms)
 * Your runtime beats 90.16 % of javascript submissions
 * Your memory usage beats 9.97 % of javascript submissions (47.3 MB)

 * return s.reverse()
 */

 /**
  * 方法二
  * 定义两个变量low和high，分别指向数组的首和尾
  * 逐个交换首和尾的数据，直到low >= high, 退出循环
  * 此时已经原地反转完成
  * 
  * Accepted
  * 478/478 cases passed (132 ms)
  * Your runtime beats 80.99 % of javascript submissions
  * Your memory usage beats 13.01 % of javascript submissions (47.2 MB)
  * 
  * let high = s.length - 1
    let low = 0
    while (low < high) {
      let tmp = s[high]
      s[high] = s[low]
      s[low] = tmp
      low ++
      high --
    }
  */
