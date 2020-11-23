/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (!points.length) {
    return 0;
  }
  let count = 1;
  points.sort((a, b) => a[1] - b[1]);
  let pos = points[0][1];
  for(let ballon of points) {
    // 如果一个气球的开始坐标大于 pos, 那么就需要射一只箭打破 pos 之前的气球
    // 然后对 pos 重新赋值
    // 吐槽： 这种题真的太难了， 想不到哇 😂
    if (ballon[0] > pos) {
      pos = ballon[1];
      count++;
    }
  }
  return count;
};
// @lc code=end

/**
 * 每次找气球中右边界位置最靠左的那一只，
 * 那么一定有一支箭的射出位置就是它的右边界，
 * 当确定了一支箭之后， 然后将所有引爆的气球移除
 * 重复上述步骤， 直到所有气球都引爆
 * 
 * var findMinArrowShots = function(points) {
    let count = 0
    points.sort((a, b) => a[1] - b[1]);
    while(points.length) {
      const minY = points[0][1];
      points = points.filter(point => !(point[0] <= minY && point[1] >= minY));
      count++
    }
    return count;
  };
 */