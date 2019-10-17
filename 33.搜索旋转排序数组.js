/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

    ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

    搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

    你可以假设数组中不存在重复的元素。

    你的算法时间复杂度必须是 O(log n) 级别。

    示例 1:

    输入: nums = [4,5,6,7,0,1,2], target = 0
    输出: 4
    示例 2:

    输入: nums = [4,5,6,7,0,1,2], target = 3
    输出: -1
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    /* 
        方法二
        利用二分查找方法

        如果中间值小于最右边的值，则说明右半边是有序的，反之，左半边是有序的
        之后在有序的部分里通过二分查找的方法来找到最终的值

        时间复杂度 O(logn)

        Accepted
        196/196 cases passed (72 ms)
        Your runtime beats 75.99 % of javascript submissions
        Your memory usage beats 77.22 % of javascript submissions (33.6 MB)
    */
    let low = 0
    let high = nums.length - 1
    while(high >= low) {
        let mid = Math.floor((low + high) / 2)
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] < nums[high]) {
            // 右半边有序
            if(nums[mid] < target && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        } else {
            // 左半边有序
            if(nums[mid] > target && target >= nums[low]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
    }
    return -1
};
// @lc code=end

/*
    方法一

    直接使用JavaScript自身api  indexOf
    return nums.indexOf(target)

    Accepted
    196/196 cases passed (60 ms)
    Your runtime beats 97.75 % of javascript submissions
    Your memory usage beats 54.01 % of javascript submissions (33.7 MB)
*/