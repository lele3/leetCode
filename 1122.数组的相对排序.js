/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  // 方法二
  // 自定义排序， 根据 arr2 定义排序规则
  const hash = {};
  for(let i = 0; i < arr2.length; i++) {
    hash[arr2[i]] = i + 1; // 不能让值为 0， 对下面的判断会产生影响
  }
  arr1.sort((a, b) => {
    if (hash[a] && hash[b]) {
      return hash[a] - hash[b];
    } else if (hash[a] && !hash[b]) {
      return -1;
    } else if (!hash[a] && hash[b]) {
      return 1;
    } else {
      return a - b;
    }
  })
  return arr1;
};
// @lc code=end

/**
 * 方法一
 * 遍历 
 *var relativeSortArray = function(arr1, arr2) {
    const result = []
    for(let i = 0; i < arr2.length; i++) {
      const val = arr2[i];
      for(let j = 0; j < arr1.length; j++) {
        if (arr1[j] === val) {
          result.push(arr1[j]);
          arr1.splice(j, 1, undefined);
        }
      }
    }
    const arr = arr1.filter(item => item).sort((a, b) => a - b);
    result.push(...arr);
    return result;
  };
 */