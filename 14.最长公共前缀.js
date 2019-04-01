/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.13%)
 * Total Accepted:    54.8K
 * Total Submissions: 170.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let min = Math.min(...strs.map(item => item.length))
    let someStart = ""
    let len = strs.length
    if (len === 0) return ""
    for (let i = 0; i < min; i++) {
        let start = strs[0].charAt(i)
        let flag = true
        for (let j = 0; j < len; j++) {
            if (strs[j].charAt(i) !== start) {
                flag = false
            }
        }
        if (flag) {
            someStart += start
        } else {
            return someStart
        }
    }
    return someStart
};

