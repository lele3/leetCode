/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.trim()
  let stack = []
  let preSign = '+'
  let num = 0
  const n = s.length
  for(let i = 0; i < n; ++i) {
    if (!isNaN(Number(s[i])) && s[i] !== ' ') {
      num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt()
    }
    if (isNaN(Number(s[i])) || i === n - 1) {
      switch(preSign) {
        case '+':
          stack.push(num)
          break
        case '-':
          stack.push(-num)
          break
        case '*':
          stack.push(stack.pop() * num)
          break
        default:
          stack.push(stack.pop() / num | 0)
      }
      preSign = s[i]
      num = 0
    }
  }
  let ans = 0
  while (stack.length) {
    ans += stack.pop()
  }
  return ans
};
// @lc code=end

/**
 * 以上是官方答案
 * 
 * 自己写了一个方法，但是没成功
 * 要处理的问题有点多
 * 也是使用 栈 去存储
 * 但是写的 if 判断很多
 * 处理 + - * / 和空格
 * 还要处理 二位或二位以上的数字， 考虑如果是被除数怎么处理
 * 
 * 想法不是很好，最终也没有完成
 */