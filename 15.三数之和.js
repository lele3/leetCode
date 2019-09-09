/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let left = 0, right = 0, result = [], tmp = 0
    nums.sort((a, b) => a - b)
    for(let i = 0, len = nums.length; i < len; i++) {
      if(nums[i] > 0) break
      if(i > 0 && nums[i] === nums[i - 1]) continue
      left = i + 1
      right = nums.length - 1
      while (left < right) {
        tmp = nums[i] + nums[left] + nums[right]
        if(tmp === 0) {
          result.push([nums[i], nums[left], nums[right]])
          left++
          right--
          // 重复值跳过
          while (left < right && nums[left] === nums[left - 1]) left++
          while (left < right && nums[right] === nums[right + 1]) right--
        } else if (tmp < 0){
          left++
          while (left < right && nums[left] === nums[left - 1]) left++
        } else {
          right--
          while (left < right && nums[right] === nums[right + 1]) right--
        }
      }
    }
    return result
};

/*
  思路
  先对数组进行排序
  定义一个变量i, 从0开始遍历数组
  定义两个指针， left指向i+1, right指向nums.length - 1
  当num[i] > 0时，此时无解
  当i > 0 && nums[i] === nums[i - 1]的时候， continue

  之后再写个循环， 判断条件 left < right
  之后根据 nums[i] + nums[left] + nums[right] 的值是大于0，小于0 还是等于0
  移动指针
  最后得到结果

  时间复杂度好像是 O(n^2)

  这道题有点难，自己想不出来，看来还要多刷呀  >.<

*/
