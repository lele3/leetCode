/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.59%)
 * Total Accepted:    49.5K
 * Total Submissions: 135.2K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === "") return true
    let len = s.length
    if (len % 2 !== 0 || len === 0) return false
    let stack = []
    for (let i = 0; i < len; i++) {
        if (stack.length === 0) {
            stack.push(s[i])
            continue
        }
        let al = stack.length - 1
        if (
            (stack[al] === "(" && s[i] === ")") ||
            (stack[al] === "[" && s[i] === "]") ||
            (stack[al] === "{" && s[i] === "}")
        ) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    if (stack.length === 0) return true
    else return false
};

