/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  /**
   * 方法三
   * 
   * 其实是方法一的优化， 没有构建二维数组， 直接根据 i, j 坐标进行计算
   */
  const tmpArr = [];
  const { abs } = Math;
  for(let i = 0; i < R; i++) {
    for(let j = 0; j < C; j++) {
      const distance = abs(i - r0) + abs(j - c0);
      if (tmpArr[distance]) {
        tmpArr[distance].push([i, j]);
      } else {
        tmpArr[distance] = [];
        tmpArr[distance].push([i, j]);
      }
    }
  }

  return tmpArr.flat();
};
// @lc code=end

/**
 * 方法一
 * 思路
 * 1. 首先构建出二维数组 squareArr
 * 2. 创建一个二维数组 tmpArr， 用来映射 距离--> 键值， 下边对应距离， 值对用 squareArr 中的数据
 * 3. 然后展平 tmpArr 即能拿到最后的数据
 * 
 * var allCellsDistOrder = function(R, C, r0, c0) {
    const squareArr = []
    for(let i = 0; i < R; i++) {
      for(let j = 0; j < C; j++) {
        squareArr.push([i,j]);
      }
    }

    const tmpArr = [];
    const { abs } = Math;
    for(let i = 0; i < squareArr.length; i++) {
      const distance = abs(squareArr[i][0] - r0) + abs(squareArr[i][1] - c0)
      if (tmpArr[distance]) {
        tmpArr[distance].push(squareArr[i]);
      } else {
        tmpArr[distance] = [];
        tmpArr[distance].push(squareArr[i]);
      }
    }
    return tmpArr.flat();
  };
 */


/**
 * 方法二
 * 思路
 * 1. 构建二维数组 squareArr
 * 2. 利用 sort 方法对数据进行原地排序
 * 3. 返回 squareArr
 * 
 * var allCellsDistOrder = function(R, C, r0, c0) {
    const squareArr = []
    for(let i = 0; i < R; i++) {
      for(let j = 0; j < C; j++) {
        squareArr.push([i,j]);
      }
    }

    const { abs } = Math;
    squareArr.sort((a, b) => {
      const p1 = abs(a[0] - r0) + abs(a[1] - c0);
      const p2 = abs(b[0] - r0) + abs(b[1] - c0);
      return p1 - p2;
    })
    return squareArr;
  };
 */