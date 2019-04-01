 /*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.95%)
 * Total Accepted:    20.1K
 * Total Submissions: 42.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aArr = a.split('').map(item => +item)
    let bArr = b.split('').map(item => +item)
    let i = aArr.length - 1
    let j = bArr.length - 1
    let resultArr = []
    let tmp = 0
    while (j >= 0 || i >= 0) {
        aArr[i] = aArr[i] ? aArr[i] : 0
        bArr[j] = bArr[j] ? bArr[j] : 0
        tmp = aArr[i] + bArr[j] + Math.floor(tmp / 2)
        if (tmp >= 2) {
            resultArr.unshift(tmp % 2)
        } else {
            resultArr.unshift(tmp)
        }
        i--
        j--
    }
    if (tmp >= 2) {
        resultArr.unshift(1)
    }
    return resultArr.join('')
};

