/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1)
  }
  const map = new Map()
  nums1.forEach(num => {
    if (map.has(num)) {
      let count = map.get(num)
      map.set(num, count + 1)
    } else {
      map.set(num, 1)
    }
  })
  const result = []
  nums2.forEach(num => {
    let count = map.get(num)
    if (count && count > 0) {
      result.push(num)
      map.set(num, count - 1)
    }
  })
  return result
};
// @lc code=end

/**
 * 方法一
 * 暴力遍历 
  var intersect = function(nums1, nums2) {
    const result = []
    nums2.forEach(num => {
      const index = nums1.indexOf(num)
      if (index > -1) {
        result.push(num)
        nums1.splice(index, 1)
      }
    })
    return result
  };
 */