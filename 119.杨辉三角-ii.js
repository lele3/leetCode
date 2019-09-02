/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



  在杨辉三角中，每个数是它左上方和右上方的数的和。

  示例:

  输入: 3
  输出: [1,3,3,1]
  进阶：

  你可以优化你的算法到 O(k) 空间复杂度吗？
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const arr = []
  let numRows = rowIndex + 1
  for (let i = 0; i < numRows; i++) {
    arr[i] = []
    arr[i][0] = 1
    arr[i][i] = 1
    if (numRows > 2 && i > 1) {
      for (let j = 1; j < i; j++) {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
      }
    }
  }
  return arr[rowIndex]
};

