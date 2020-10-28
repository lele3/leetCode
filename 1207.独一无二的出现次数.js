/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  // 利用 hash 和 Set 去重
  // 想不到更好的或者其他解决办法了
  const map = {};
  arr.forEach(item => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  })
  const values = Object.values(map);
  const count1 = values.length;
  const count2 = new Set(values).size;
  return count1 === count2;
};
// @lc code=end
