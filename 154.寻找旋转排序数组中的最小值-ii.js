/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  /**
   * 考虑数组中的最后一个元素 x：在最小值右侧的元素，它们的值一定都小于等于 x；而在最小值左侧的元素，它们的值一定都大于等于 x。因此，我们可以根据这一条性质，通过二分查找的方法找出最小值。
   */
  let low = 0, high = nums.length - 1
  while(low < high) {
    let pivot = low + Math.floor((high - low) / 2)
    if (nums[pivot] < nums[high]) {
      high = pivot
    } else if (nums[pivot] > nums[high]) {
      low = pivot + 1
    } else {
      high--
    }
  }
  return nums[low]
};
// @lc code=end

