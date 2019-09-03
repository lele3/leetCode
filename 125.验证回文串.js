/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let tmpS = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase()
  let head = 0, tail = tmpS.length - 1
  while (head <= tail) {
    if (tmpS.charAt(head) === tmpS.charAt(tail)) {
      head++
      tail--
    } else {
      return false
    }
  }
  return true
};

/**
  思路
  首先正则将除字母和数字的字符去掉，并将所有字母转换成小写
  指定两个指针，head 和 tail 分别代表首指针和尾指针
  循环比较 tmpS 的首指针和尾指针所代表的字符是否相等
  如果不相等则说明不是回文的
  循环条件是 head <= tail
  当不满足循环条件退出循环，则说明该字符串是回文

  ✔ Accepted
  ✔ 476/476 cases passed (96 ms)
  ✔ Your runtime beats 89.5 % of javascript submissions
  ✔ Your memory usage beats 82.85 % of javascript submissions (36.9 MB)
 */
