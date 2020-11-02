/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start

const set_intersection = (set1, set2) => {
  if (set1.size > set2.size) {
    set_intersection(set2, set2);
  }
  const insersection = new Set();
  for(const num of set1) {
    if (set2.has(num)) {
      insersection.add(num);
    }
  }
  return [...insersection];
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // 该方法思路类似方法一， 只不过是换了一种数据结构
  // 采用 set, 那么查找的时间复杂度就变成了 O(1)
  // 时间复杂度：O(m+n)，其中 m 和 n 分别是两个数组的长度。
  // 使用两个集合分别存储两个数组中的元素需要 O(m+n) 的时间，
  // 遍历较小的集合并判断元素是否在另一个集合中需要 O(min(m,n)) 的时间，
  // 因此总时间复杂度是 O(m+n)。
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return set_intersection(set1, set2);
};
// @lc code=end

/**
 * 方法一： 利用 js 数组的方法
 * 首先对 num1 去重，
 * 然后过滤出在 num2 中包含的元素， 即为 num1 和 num2 的交集
 * var intersection = function(nums1, nums2) {
     return [...new Set(nums1)].filter(item => nums2.includes(item))
   };

   时间复杂度：
   假设 num1 的长度是 n, num2 的长度是 m, 遍历 num1， 此时为 O(n),
   在遍历 num2， 查找是否含有该元素， 此时为 O(m)
   所以， 整体复杂度为 O(n * m)
 */
