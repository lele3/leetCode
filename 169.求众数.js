/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (60.21%)
 * Likes:    316
 * Dislikes: 0
 * Total Accepted:    68.2K
 * Total Submissions: 113.2K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在众数。
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    /*
      方法三（摩尔投票法）
      这个方法我是想不到的，哈哈 ！！

      寻找数组中超过一半的数字，这意味着数组中其他数字出现次数的总和都是比不上这个数字出现的次数 。
      即如果把 该众数记为 +1 ，把其他数记为 −1 ，将它们全部加起来，和是大于 0 的。
      所以可以这样操作：
      设置两个变量 candidate 和 count，candidate 用来保存数组中遍历到的某个数字，count 表示当前数字的出现次数，一开始 candidate 保存为数组中的第一个数字，count 为 1
      遍历整个数组
      如果数字与之前 candidate 保存的数字相同，则 count 加 1
      如果数字与之前 candidate 保存的数字不同，则 count 减 1
      如果出现次数 count 变为 0 ，candidate 进行变化，保存为当前遍历的那个数字，并且同时把 count 重置为 1
      遍历完数组中的所有数字即可得到结果
    */
    let candidate = nums[0], count = 1
    for(let i = 1, len = nums.length; i < len; i++) {
      if(count === 0) {
        candidate = nums[i]
        count = 1
      } else if(candidate === nums[i]) {
        count++
      } else {
        count--
      }
    }  
    return candidate
    /*
      方法二
      hash存储
      时间复杂度O(n)
      空间复杂度O(n)
      ✔ Accepted
      ✔ 44/44 cases passed (76 ms)
      ✔ Your runtime beats 97.81 % of javascript submissions
      ✔ Your memory usage beats 29.8 % of javascript submissions (37.6 MB)

      let mid = Math.floor(nums.length / 2)
      const map = {}
      for(let i = 0, len = nums.length; i < len; i++) {
        if(!map[nums[i]]) {
          map[nums[i]] = 1
        } else {
          map[nums[i]]++
        }
      }
      return Object.keys(map).find(item => map[item] > mid)
    */
};

/*
  方法一
  先排序，相同的肯定会挨着一起，计算数量，对比n/2
  排序时间复杂度为n(nlogn)
  for 循环时间复杂度为 O(n)
  所以整体时间复杂度为 O(nlogn)

  ✔ Accepted
  ✔ 44/44 cases passed (116 ms)
  ✔ Your runtime beats 34.46 % of javascript submissions
  ✔ Your memory usage beats 23.67 % of javascript submissions (37.7 MB)

    if(nums.length === 1) return nums[0]
    let mid = Math.floor(nums.length / 2)
    let count = 1
    nums.sort((a, b) => a - b)
    for(let i = 1, len = nums.length; i < len; i++) {
      if(nums[i] === nums[i-1]) {
        count++
        if(count > mid) {
          return nums[i]
        }
      } else {
        count = 1
      }
    }
*/
