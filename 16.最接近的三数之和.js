/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 * 
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
   例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
   与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let min = nums[0] + nums[1] + nums[2],
        sum = 0
    for(let i = 0, len = nums.length; i < len; i++) {
      let point1 = i + 1
      let point2 = len - 1
      while (point1 < point2) {
        sum = nums[i] + nums[point1] + nums[point2]
        if(Math.abs(target - sum) < Math.abs(target - min)) {
          min = sum
        }
        if(sum > target) {
          point2--
        } else if(sum < target) {
          point1++
        } else {
          return target
        }
      }
    }
    return min
};
/*
  思路
  明明已经刷过15题了，和这个题目类似，感觉这个题目还比15题简单，为什么刷不出来呢？ 好烦呦 >.<

  方法一
  可以使用3个循环遍历，暴力解法， 时间复杂度O(n^3)

  方法二
  首先对数组进行排序， 时间复杂度一般是O(nlogn)
  使用for循环遍历数组，通过下标i得到所有的数据
  声明两个指针，一个指向 i+1,一个指向nums.length-1
  之后再去循环， 退出条件即 point2 >= point1
  声明一个变量sum,用于存储每次循环3个元素的和
  通过比较 target-sum 和 target-min 的绝对值来更新min
  同时，判断 target 和 sum 的大小关系，移动指针， 如果target > sum, 此时 point1++, 反之 point2++
  如果target === sum, 此时相等，最接近，直接返回

  循环退出以后，返回 min, 即满足题目要求

  时间复杂度 O(nlogn) + O(n^2) = O(n^)

  ✔ Accepted
  ✔ 125/125 cases passed (92 ms)
  ✔ Your runtime beats 96.19 % of javascript submissions
  ✔ Your memory usage beats 33.03 % of javascript submissions (35.1 MB)
*/
