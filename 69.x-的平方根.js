/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (34.99%)
 * Total Accepted:    29K
 * Total Submissions: 82.5K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0
    if (x === 1) return 1
    const { floor, pow } = Math 
    let len = floor(x / 2)
    for (let i = 1; i <= len; i++) {
        if ( pow(i, 2) <= x && pow(i+1, 2) > x) {
            return i
        }
    }
    // let left = 0
    // let right = x
    // let mid  = 0
    // while (left <= right) {
    //     mid = floor((left + right) / 2)
    //     if (pow(mid, 2) > x) {
    //         right = mid - 1
    //     } else if (pow(mid, 2) < x) {
    //         left = mid + 1
    //     } else if (pow(mid, 2) === x ) {
    //         return mid
    //     }
    //     console.log(mid)
    // }
    // return floor(right)
};

