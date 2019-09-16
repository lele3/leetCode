/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (31.93%)
 * Likes:    273
 * Dislikes: 0
 * Total Accepted:    23.8K
 * Total Submissions: 74.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length
    for(let i = len - 1; i > 0; i--) {
      if (nums[i] > nums[i - 1]) {
        for(var j = i; j < len; j++) {
          if(nums[j] <= nums[i - 1]) {
            break
          }
        }
        let tmp = nums[i - 1]
        nums[i - 1] = nums[j - 1]
        nums[j - 1] = tmp
        
        let tmpNum = nums.slice(i).sort((a, b) => a - b)
        nums.splice(i, tmpNum.length, ...tmpNum)
        return nums
      }
    }
    return nums.reverse()
};

/*
  思路
  首先这道题根本没看懂， 看了别人的评论才大概搞懂这道题的意思
  大概意思是找到比当前数组排列刚好大一点的排列， 没有的话就返回最小排列

  自己试着做了一个半小时，但是[1,3,2] 和 [4,2,0,2,3,2,0]这两个总有一个ac不了🤣
  只想到了交换挨着的两个以及后边部分升序

  正解
  首选从右向左遍历，找到nums[i] > nums[i - 1], 记录 i-1
  之后从i位置向右遍历，找到nums[i - 1] <= nums[j], 记录j-1
  之后交换nums[i - 1] 和 nums[j - 1]
  之后按升序排列位置i及i以后的数组
  最后输出nums

  ✔ Accepted
  ✔ 265/265 cases passed (80 ms)
  ✔ Your runtime beats 96.62 % of javascript submissions
  ✔ Your memory usage beats 34.92 % of javascript submissions (34.9 MB)
*/
