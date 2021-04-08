/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const m = matrix.length
  if (m > 0) {
    const n = matrix[0].length
    this.sums = Array(m).fill(0).map(() => Array(n + 1).fill(0))
    for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
        this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j]
      }
    }
  }
  // this.sums[i] 存储的是 matrix[i] 这一行 0 到 j 的和
  /**
  * 例如: matrix = [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  ]
  this.sums[0] = [3, 3, 4, 8, 10], 每个位置的值为前面几个数到当前位置的和
   */
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // let resultMatrix = []
  // let q = p = -1
  // for(let i = row1; i <= row2; i++) {
  //   q++
  //   p = -1
  //   resultMatrix[q] = []
  //   for(let j = col1; j <= col2; j++) {
  //     p++
  //     resultMatrix[q][p] = this.matrix[i][j]
  //   }
  // }
  // let sum = 0
  // for(let i = 0; i < resultMatrix.length; i++) {
  //   for(let j = 0; j < resultMatrix[i].length; j++) {
  //     sum += resultMatrix[i][j]
  //   }
  // }
  // return sum
  let sum = 0
  for(let i = row1; i <= row2; i++) {
    sum += this.sums[i][col2 + 1] - this.sums[i][col1]
  }
  return sum
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

