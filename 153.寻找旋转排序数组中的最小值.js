/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0, high = nums.length - 1
  while(low < high) {
    let mid = low + Math.floor((high - low) / 2)
    if (nums[mid] < nums[high]) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return nums[low]
};
// @lc code=end

/**
 * 方法一
 * 
 * 将 nums 翻转回去， 直到第一个值小于最后一个值
 * 说明此时数组的状态为最开始的状态， 那么第一个元素即为最小值
 * var findMin = function(nums) {
    const len = nums.length
    let firstNum = nums[0]
    let lastNum = nums[len - 1]
    while(firstNum > lastNum) {
      nums.push(nums.shift())
      firstNum = nums[0]
      lastNum = nums[len - 1]
    }
    return firstNum
   };
 */