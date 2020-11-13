/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const len = A.length;
  const resultEven = [];
  const resultOdd = [];
  for(let i = 0; i < len; i++) {
    if (A[i] % 2 === 0) {
      resultEven.push(A[i])      
    } else {
      resultOdd.push(A[i])
    }
  }
  const result = []
  for (let i = 0; i < len / 2; i++) {
    result.push(resultEven[i]);
    result.push(resultOdd[i])
  }
  return result;
};
// @lc code=end

/**
 * 思路
 * 分别将奇数 偶数存放到两个数据中
 * 然后依次放入结果数组中
 * 
 * var sortArrayByParityII = function(A) {
    const len = A.length;
    const resultEven = [];
    const resultOdd = [];
    for(let i = 0; i < len; i++) {
      if (A[i] % 2 === 0) {
        resultEven.push(A[i])      
      } else {
        resultOdd.push(A[i])
      }

    }
    const result = []
    for (let i = 0; i < len / 2; i++) {
      result.push(resultEven[i]);
      result.push(resultOdd[i])
    }
    return result;
  };
 */
