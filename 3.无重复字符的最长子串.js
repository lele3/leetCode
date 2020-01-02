/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (31.14%)
 * Likes:    2354
 * Dislikes: 0
 * Total Accepted:    203.2K
 * Total Submissions: 651.9K
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 示例 1:
 * 
 * 输入: "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * 
 * 示例 2:
 * 
 * 输入: "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * 示例 3:
 * 
 * 输入: "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    /**
     * 方法二
     * 
     * 优化方法一
     * 定义一个数组arr
     * 遍历字符串s， 如果arr中含有item，则删除arr中0-index位置的元素
     * 如果arr中不含有item，则push进去
     * 比较maxLen和arr.length的大小，取较大值
     * 遍历完以后返回 maxlen
     * 
     * Accepted
     * 987/987 cases passed (96 ms)
     * Your runtime beats 77.77 % of javascript submissions
     * Your memory usage beats 88.68 % of javascript submissions (37.6 MB)
     */
    let maxLen = 0
    const arr = []
    for(let item of s) {
      if(arr.includes(item)) {
        let index = arr.indexOf(item)
        arr.splice(0, index + 1)
      }
      arr.push(item)
      maxLen = maxLen > arr.length ? maxLen : arr.length
    }
    return maxLen
};
// @lc code=end

/**
 * 方法一
 * 
 * 思路
 * 定义一个Set对象set
 * 遍历字符串s，定义一个变量j, 使 j = i
 * 然后判断set中是否含有s[i]
 * 如果没有，就将其填加到 set 中， 此时计数器j++
 * 直到遇到set中含有s[j]或者s[j]不存在， 退出循环
 * 之后比较set.size 和 maxLen， 取较大值赋值给 maxLen
 * 
 * 遍历完以后返回 maxLen
 * 
 * 代码如下
 * 
 
  var lengthOfLongestSubstring = function(s) {
    let maxLen = 0
    const set = new Set()
    for (let i = 0, len = s.length; i < len; i++) {
      let j = i
      while (!set.has(s[j]) && s[j]) {
        set.add(s[j])
        j++
      }
      maxLen = set.size > maxLen ? set.size : maxLen
      set.clear()
    }
    return maxLen
  };

 * Accepted
 * 987/987 cases passed (292 ms)
 * Your runtime beats 20.13 % of javascript submissions
 * Your memory usage beats 17.83 % of javascript submissions (42.2 MB)
 */