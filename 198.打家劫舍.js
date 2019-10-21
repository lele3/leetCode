/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 *
 * https://leetcode-cn.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (41.97%)
 * Likes:    504
 * Dislikes: 0
 * Total Accepted:    50.6K
 * Total Submissions: 120.7K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: 4
 * 解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 * 
 * 示例 2:
 * 
 * 输入: [2,7,9,3,1]
 * 输出: 12
 * 解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
 * 偷窃到的最高金额 = 2 + 9 + 1 = 12 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // f(n) = max((f(n-2)+n, f(n-1))
    let nowRes = 0, lastRes = 0
    for(let i = 0, len = nums.length; i < len; i++) {
        let temp = lastRes
        lastRes = nowRes
        nowRes = Math.max(temp + nums[i], nowRes)
    }
    return nowRes
};
// @lc code=end

/*
    思路

    动态规划思想

    当n=1时， 返回nums[1]
    当n=2时， 返回max(nums[1], nums[2])
    当n=3时， 返回数组长度为1的结果+nums[3] 和 数组长度为2的结果 的最大值
    当n=4时， 返回数组长度为2的结果+nums[4] 和 数组长度为3的结果的最大值
    。
    。
    。
    当n=n时， 返回数组长度为n-2的结果+nums[n] 和 数组长度为n-1的结果的最大值

    所以可以得到公式
    f(n) = max((f(n-2)+n, f(n-1))

    时间复杂度 O(n)

    Accepted
    69/69 cases passed (56 ms)
    Your runtime beats 96.8 % of javascript submissions
    Your memory usage beats 61.88 % of javascript submissions (33.6 MB)

    ps
    这道题我是没有太懂， 自己想不出来。。
 */