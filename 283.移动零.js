/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // 别的方法就不试了， 感觉好多， 借助额外的空间
  // 该方法是利用 sort 对数组进行原地排序， 0 当成最大值， 其他还按之前的顺序即可
  return nums.sort((a, b) => {
    if (a === 0 && b !== 0) {
      return 1;
    } else if (a !== 0 && b === 0) {
      return -1;
    } else {
      return 0;
    }
  })
};
// @lc code=end

