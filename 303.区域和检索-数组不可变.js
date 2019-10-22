/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 *
 * https://leetcode-cn.com/problems/range-sum-query-immutable/description/
 *
 * algorithms
 * Easy (57.55%)
 * Likes:    109
 * Dislikes: 0
 * Total Accepted:    20.3K
 * Total Submissions: 35.3K
 * Testcase Example:  '["NumArray","sumRange","sumRange","sumRange"]\n[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]'
 *
 * 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
 * 
 * 示例：
 * 
 * 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
 * 
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 * 
 * 说明:
 * 
 * 
 * 你可以假设数组不可变。
 * 会多次调用 sumRange 方法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let len = nums.length
    this.sum = new Array(len + 1)
    this.sum[0] = 0
    for(let i = 1; i <= len; i++) {
        this.sum[i] = this.sum[i - 1] + nums[i - 1]
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j + 1] - this.sum[i]
};

/*
方法二
计算从第0项到第len项的所有和并存储在this.sum数组中
多次调用sumRange函数，每次只需计算 第j项的和减去第i项的和

Accepted
16/16 cases passed (108 ms)
Your runtime beats 92.44 % of javascript submissions
Your memory usage beats 84.42 % of javascript submissions (44.2 MB)
*/

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

/*
    方法一

    var NumArray = function(nums) {
        this.nums = nums
    };

    NumArray.prototype.sumRange = function(i, j) {
        let sum = 0
        for(let p = i; p <= j; p++) {
            sum += this.nums[p]
        }
        return sum
    };

    时间复杂度O(n)
    空间复杂度O(1)
    Accepted
    16/16 cases passed (184 ms)
    Your runtime beats 35.4 % of javascript submissions
    Your memory usage beats 100 % of javascript submissions (43.7 MB)
*/

