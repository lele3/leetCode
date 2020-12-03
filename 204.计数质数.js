/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  /**
   * 官方题解
   * 埃氏筛
   * 如果 x 是质数， 那么大于 x 的 x 的倍数 2x, 3x, ... 一定不是质数。
   * */ 
  const isPrime = new Array(n).fill(1);
  let count = 0;
  for(let i = 2; i < n; i++) {
    if(isPrime[i]) {
      count++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }
  return count;
};


// var countPrimes = function(n) {
//   let count = 0;
//   for(let i = 2; i < n; i++) {
//     if (isPrimeNum(i)) {
//       count++
//     }
//   }
//   return count;
// };
/**
 * @description 判断一个数是不是质数
 * @param {*} num 
 */
function isPrimeNum(num) {
  if (num <= 3) {
    return num > 1;
  }
  // 不在 6 的倍数两侧的一定不是质数
  if (num % 6 != 1 && num % 6 != 5) {
    return false;
  }
  const sqrt = parseInt(Math.sqrt(num));
  for(let i = 5; i <= sqrt; i += 6) {
    // 判断 6 两侧的数
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}
// @lc code=end

