/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  /**
   * 方法三： 双指针法
   */
  let l = 0, r = A.length - 1;
  while(A[l] < A[l+1]) l++;
  while(A[r] < A[r-1]) r--;
  return l && l !== A.length - 1 && l === r;
};
// @lc code=end

/**
 * 方法一
 * 思路： 找到最大值的位置， 然后分别遍历最大值左边和右边
 * 如果两边都满足条件， 则返回 true, 否则返回 false
 * 
 * var validMountainArray = function(A) {
    const max = Math.max(...A);
    const len = A.length;
    const maxIndex = A.indexOf(max);
    if (maxIndex === 0 || maxIndex === len - 1) return false;
    let flag1 = true, flag2 = true;
    for (let i = 0; i < maxIndex; i++) {
      if (A[i] >= A[i + 1]) {
        flag1 = false;
      }
    }
    for (let i = maxIndex; i < len; i++) {
      if (A[i] <= A[i + 1]) {
        flag2 = false;
      }
    }
    return flag1 && flag2;
  };
 */


/**
 * 方法二： 直接遍历， 判断调转方向的位置
 * var validMountainArray = function(A) {
    const len = A.length;
    if (len === 0 || len === 1) return false;
    let flag1 = true;
    for (let i = 0; i < len; i++) {
      if ((i === 0 && A[i] > A[i + 1]) || (i === len - 1 && A[i] > A[i - 1])) {
        return false
      } else {
        if (flag1 && A[i] < A[i+1]) {
        } else {
          flag1 = false;
          if (A[i] <= A[i+1]) {
            return false;
          }
        }
      }
    }
    return true;
  };
 */