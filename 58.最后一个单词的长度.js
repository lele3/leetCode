/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (28.94%)
 * Total Accepted:    21.8K
 * Total Submissions: 74.5K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let tmpArr = s.split(' ')
    let len = tmpArr.length - 1
    for (i = len; i >= 0; i--) {
        if (tmpArr[i]) {
            return tmpArr[i].length
        }
    }
    return 0
    // let tmpArr = s.trim().split(" ")
    // return tmpArr[tmpArr.length - 1].length
};

