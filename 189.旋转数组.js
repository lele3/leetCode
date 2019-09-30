/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (38.60%)
 * Likes:    367
 * Dislikes: 0
 * Total Accepted:    66.2K
 * Total Submissions: 171.2K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 说明:
 * 
 * 
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    /*
      方法一
      数组从栈顶弹出一个，就向数组头部添加一个，每次k--
      当k === 0时，退出循环
      时间复杂度 O(n)

      ✔ Accepted
      ✔ 34/34 cases passed (84 ms)
      ✔ Your runtime beats 96.52 % of javascript submissions
      ✔ Your memory usage beats 23.43 % of javascript submissions (35.5 MB)

       while (k) {
        let tmp = nums.pop()
        nums.unshift(tmp)
        k--
      }
    */

    /*
      方法二
      利用splice方法将数组后面几个删除掉
      之后再利用unshift将删掉的几个填到数组头部

      时间复杂度 O(1)

      ✔ Accepted
      ✔ 34/34 cases passed (72 ms)
      ✔ Your runtime beats 99.7 % of javascript submissions
      ✔ Your memory usage beats 24.53 % of javascript submissions (35.5 MB)
    */

      let l = nums.length
      nums.unshift(...nums.splice(l - k, k))
    
};

