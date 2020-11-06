/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  // 计算每个数转换为二进制以后 1 的个数
  function get(num) {
    let countOf1 = 0;
    while(num) {
      countOf1 += num % 2;
      num = Math.floor(num / 2);
    }
    return countOf1;
  }
  // 利用 map 将数值与转换为二进制以后 1 的个数做映射
  const bin = new Map();
  arr.forEach(item => {
    bin.set(item, get(item));
  });
  // 利用数组的排序方法 sort 对数组进行原地排序
  arr.sort((a, b) => {
    if (bin.get(a) < bin.get(b)) {
      return -1;
    } else if (bin.get(a) > bin.get(b)) {
      return 1;
    } else {
      return a - b;
    }
  })
  // 返回排序以后的数组
  return arr;
};
// @lc code=end

