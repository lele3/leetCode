/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
 points.sort((a, b) => {
   let r1 = a[0] * a[0] + a[1] * a[1];
   let r2 = b[0] * b[0] + b[1] * b[1];

   return r1 - r2;
 });

 return points.slice(0, Math.min(points.length, K));
};
// @lc code=end

/**
 * 方法一 
 * 利用 map 做的， 运行时间复杂度很高， 只是一种垃圾思路
 * var kClosest = function(points, K) {
    const map = new Map();
    points.forEach(([a, b]) => {
      map.set([a, b], a * a + b * b);
    });
    const values = [...map.values()];
    const res = values.sort((a, b) => {
      if (+a > +b) {
        return 1;
      } else if (+a < +b) {
        return -1;
      } else {
        return 0;
      }
    }).slice(0, K);
    const result = [];
    res.forEach(item => {
      for(let [key, value] of map) {
        if (value == item) {
          result.push(key);
          map.delete(key);
        }
      }
    })
    return result;
  };

  Accepted
  83/83 cases passed (4572 ms)
  Your runtime beats 5.26 % of javascript submissions
  Your memory usage beats 5.37 % of javascript submissions (60.3 MB)
 */