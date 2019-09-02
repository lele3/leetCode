/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const arr = []
    for(let i = 0; i < numRows; i++) {
      arr[i] = []
      arr[i][0] = 1
      arr[i][i] = 1
      if(numRows > 2 && i > 1) {
        for(let j = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
      }
    }
    return arr
};


/**
 * 思路
 * 将二维数组的第0个和最后一个全部填充为1
 * 再按照杨辉三角的公式  arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j] 计算就好了
 * 
 * 自己写的代码，把自己给坑死了
 * 误将 arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j] 写成arr[i][j] = arr[i - i][j - 1] + arr[i - 1][j]
 * 排查了好长时间，蠢透了-.-
 * 
 * 
 * 
 *  Accepted
 *  15/15 cases passed (68 ms)
 *  Your runtime beats 93.57 % of javascript submissions
 *  Your memory usage beats 31.44 % of javascript submissions (33.7 MB)
 */

