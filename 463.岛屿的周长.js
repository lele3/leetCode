/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 *
 * https://leetcode-cn.com/problems/island-perimeter/description/
 *
 * algorithms
 * Easy (68.34%)
 * Likes:    300
 * Dislikes: 0
 * Total Accepted:    40.5K
 * Total Submissions: 57K
 * Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'
 *
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。
 * 
 * 网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
 * 
 * 岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100
 * 。计算这个岛屿的周长。
 * 
 * 
 * 
 * 示例 :
 * 
 * 输入:
 * [[0,1,0,0],
 * ⁠[1,1,1,0],
 * ⁠[0,1,0,0],
 * ⁠[1,1,0,0]]
 * 
 * 输出: 16
 * 
 * 解释: 它的周长是下面图片中的 16 个黄色的边：
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let gridHeight = grid.length;
  let gridWidth = grid[0].length;
  let perimeter = 0;
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
      if (grid[i][j] === 1) {
        if(i === 0) {
          perimeter++;
        }
        if(i === gridHeight - 1) {
          perimeter++;
        }
        if (j === 0) {
          perimeter++;
        }
        if (j === gridWidth - 1) {
          perimeter++;
        }
        if (j !== 0 && grid[i][j-1] === 0) {
          perimeter++;
        }
        if(i !== gridHeight - 1 && grid[i+1][j] === 0) {
          perimeter++;
        }
        if(j !== gridWidth - 1 && grid[i][j+1] === 0) {
          perimeter++;
        }
        if( i !== 0 && grid[i-1][j] === 0) {
          perimeter++;
        }
      }
    }
  }
  return perimeter;
};
// @lc code=end
/**
 * 解题思路
 * 遍历二维数组， 如果当前元素是陆地（1）， 则判断其四个边
 * 如果边是水（0）或者是二维数组的边界， 那么周长加 1
 * 遍历完成以后， 即可以得到岛屿的周长
 */