/*
 * @lc app=leetcode.cn id=1365 lang=javascript
 *
 * [1365] 有多少小于当前数字的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  // 方法二： 利用 hash 映射， 统计每个数字出现的次数
  // 然后遍历 找到比当前值小的出现的次数和
  const map = [];
  const len = nums.length;
  // 建立一个映射关系， value 代表值， map[value] 代表出现的次数
  for (let i = 0; i < len; i++) {
    const value = nums[i]
    if (map[value]) {
      map[value]++;
    } else {
      map[value] = 1;
    }
  }
  const result = Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    const value = nums[i];
    for (let j = 0; j < value; j++) {
      if (map[j]) {
        result[i] += map[j];
      }
    }
  }
  return result;
};
// @lc code=end

/**
 * 方法一： 暴力循环
 * 使用两个循环，遍历所有数据， 找到满足条件的个数
 * var smallerNumbersThanCurrent = function(nums) {
    const len = nums.length;
    const result = [];
    for(let i = 0; i < len; i++) {
      let count = 0;
      for(let j = 0; j < len; j++) {
        if (nums[i] > nums[j] && i !== j) {
          count++;
        }
      }
      result.push(count);
    }
    return result;
  };
 * */ 

