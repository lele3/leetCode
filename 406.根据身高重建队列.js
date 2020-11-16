/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  })
  const res = [];
  for(let i = 0; i < people.length; i++) {
    if (res.length <= people[i][1]) {
      res.push(people[i]);
    } else {
      res.splice(people[i][1], 0, people[i]);
    }
  }
  return res;
};
// @lc code=end

/**
 * 这种题整不出来 🤣， 看的解析，思路如下
 * 首先对数组进行排序， 按照数对的元素 1 降序排序
 * 按照数对的元素 2 升序排序， 原因是，按照元素 1
 * 进行降序排序， 对于每个元素， 在其之前的元素的个数
 * 就是大于等于他的元素的数量， 而按照第二个元素升序排序
 * 是希望 k 大的尽量在后边， 减少插入操作的次数
 * 
 * 然后初始化一个数组 res
 * 循环 people
 * 每次拿 res.length 和 people[i][1] 比较
 * 如果 res.length <= people[i][1]
 * 那么说明 people[i][1] 肯定在此时 res 的末尾（res.length 即排在 people[i] 人的个数 ）
 * 则 push 进去
 * 如果 res.length > people[i][1],
 * 那么则把 people[i] 插入到 people[i][1] 的位置即可
 */