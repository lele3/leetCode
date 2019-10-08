/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 *  给定一个整数数组，判断是否存在重复元素。

    如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

    示例 1:

    输入: [1,2,3,1]
    输出: true
    示例 2:

    输入: [1,2,3,4]
    输出: false
    示例 3:

    输入: [1,1,1,3,3,4,3,2,4,2]
    输出: true
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /*
        方法二
        先对数组进行排序，两两比较
        如果 nums[i] === nums[i + 1], 说明有相同元素， 返回true
        如果循环能正常执行完成，则说明没有相同元素， 返回false

        时间复杂度 排序算法应该是O(n^2)， for循环O(n)， 所以为O(n^2)

        Accepted
        18/18 cases passed (116 ms)
        Your runtime beats 44.83 % of javascript submissions
        Your memory usage beats 65.57 % of javascript submissions (38.4 MB)
    */
    nums.sort()
    for(let i = 0, len = nums.length; i < nums.length - 1; i++) {
        if(nums[i] === nums[i + 1]) return true
    }
    return false
};

/*
    思路

    方法一
    利用Set数据结构对数组进行去重， 如果去重以后的数组和原数组长度相等，则没有重复元素，返回false，否则返回true

    let tmp = [...new Set(nums)]
    return !!nums.length && !(tmp.length === nums.length)

    时间复杂度O(1)
    Accepted
    18/18 cases passed (76 ms)
    Your runtime beats 95.05 % of javascript submissions
    Your memory usage beats 8.55 % of javascript submissions (43.4 MB)
*/
// @lc code=end

