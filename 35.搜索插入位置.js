/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (42.87%)
 * Total Accepted:    32.6K
 * Total Submissions: 76K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // for (let i = 0, len = nums.length; i < len; i++) {
    //     if (nums[i] === target) return i
    //     if (nums[i] > target && nums[i - 1] < target) return i
    // } 
    // if (nums[0] > target) return 0
    // return nums.length
    let low = 0
    let high = nums.length - 1
    
    while (low <= high) {
        let mid = low + ((high - low) >> 1)
        if (nums[mid] >= target) {
            if ((mid == 0) || (nums[mid - 1] < target)) return mid
            else high = mid - 1
        } else {
            low = mid + 1
        }
      
    }
     if (nums[0] > target) return 0
     return nums.length
};

