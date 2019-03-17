/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 *
 * https://leetcode-cn.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (48.38%)
 * Total Accepted:    23K
 * Total Submissions: 47.5K
 * Testcase Example:  '1'
 *
 * 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 * 
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 
 * 1 被读作  "one 1"  ("一个一") , 即 11。
 * 11 被读作 "two 1s" ("两个一"）, 即 21。
 * 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
 * 
 * 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
 * 
 * 注意：整数顺序将表示为一个字符串。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "1"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 4
 * 输出: "1211"
 * 
 * 
 * 
 * 对照表 1： 11 ；  2： 12；  11：21； 22： 22
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1'  
    let sameNum = 0     // 相同数的个数
    for (let i = 0; i < n; i += 1) {
        let len = str.length
        let returnStr = ''
        for (let j = 0; j < len; j += 1) {
            if (str.charAt(j) === str.charAt(j+1)) {
                sameNum++
            } else {
                returnStr= returnStr + (sameNum === 0 ? '' : sameNum) + str.charAt(j)
                sameNum = 1
            }
        }
        str = returnStr
        sameNum = 1
    }
    return str
};

