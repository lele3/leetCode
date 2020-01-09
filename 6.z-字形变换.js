/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 *
 * https://leetcode-cn.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (46.10%)
 * Likes:    514
 * Dislikes: 0
 * Total Accepted:    85.1K
 * Total Submissions: 184.3K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * 
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 
 * 
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 
 * 请你实现这个将字符串进行指定行数变换的函数：
 * 
 * string convert(string s, int numRows);
 * 
 * 示例 1:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * 
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  /**
  * 思路， 这个算法真巧妙，一维数组，每个元素存储该行的数据
  * 定义一个变量cul_num代表当前的行
  * 当行号是第一行或最后一行的时候，反转
  * 不断的上下扫描， 直到s字符串被遍历完
  *
  * 时间复杂度 O(n)
  * 
  * Accepted
    1158/1158 cases passed (96 ms)
    Your runtime beats 85.46 % of javascript submissions
    Your memory usage beats 55.46 % of javascript submissions (38.5 MB)
  * */
    const arr = []
    let cur_num = 0
    let up = false
    for(let i = 0; i < s.length; i++) {
      if(!arr[cur_num]) {
        arr[cur_num] = ''
      }
      arr[cur_num] += s[i]
      if(cur_num === 0 || cur_num === numRows - 1) {
        up = !up
      }
      cur_num += up ? 1 : -1
    }
    return arr.join('')
};
// @lc code=end

/**
 * 思路
 * 首先定义二维数组，目的是按照z字型存在二维数组中
 * 定义一个x和y, 分别代表数组的横向和纵向
 * 之后以一个对勾型为一个循环
 * 将对应的字符放到对勾型相应的位置
 * 
 * 最后遍历二维数组，输出字符串
 * 
 * 没有考虑到numRows为1的情况，所以开头做了判断
 * 
  var convert = function(s, numRows) {
    if (numRows === 1) return s
    // 定义一个二维数组
    const arr = []
    for(let i = 0; i < numRows; i++) {
      arr[i] = []
    }
    const strlen = s.length
    let index = 0
    let y = 0 // 纵向
    let x = 0 // 横向
    while (index < strlen) {
      for(; y < numRows; y++) {
        arr[y][x] = s[index]
        index++
      }
      y = numRows - 2
      x++
      for (; y > 0; y--) {
        arr[y][x] = s[index]
        x++
        index++
      }
    }
    let str = ''
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr[i].length; j++) {
        if (arr[i][j]) {
          str += arr[i][j]
        }
      }
    }
    return str
  };

  时间复杂度 应该是O(n^2)

  Accepted
  1158/1158 cases passed (164 ms)
  Your runtime beats 16.39 % of javascript submissions
  Your memory usage beats 5.16 % of javascript submissions (67.2 MB)
 */
