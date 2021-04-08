/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  // 说实话： 这谁能想得到呢？？？
  const bits = new Array(num + 1).fill(0)
  let highBit = 0
  for (let i = 1; i <= num; i++) {
    if ((i & (i - 1)) == 0) {
      highBit = i
    }
    bits[i] = bits[i - highBit] + 1
  }
  return bits
};
// @lc code=end


/**
 * 方法一
 * 一个一个的计算
 *  
 * var countBits = function(num) {
    const result = []
    for(let i = 0; i <= num; i++) {
      let count = 0
      Number(i).toString(2).split('').forEach(item => {
        if (item == 1) {
          count++
        }
      })
      result.push(count)
    }
    return result
  };
 */

 /**
  * 方法二
  * 自己写一个转换函数
  * 
  * var countBits = function(num) {
      function changeToboundary(num) {
        let count = 0
        while(num) {
          if (num % 2 === 1) {
            count++
          } 
          num = Math.floor(num / 2)
        }
        return count
      }
      const result = []
      for(let i = 0; i <= num; i++) {
        result.push(changeToboundary(i))
      }
      return result
    };
  */

  /**
   * 方法三
   * 借助 位运算 & 提高代码执行效率
   * 按位与运算 & 的一个性质是：对于任意整数 x，令 x=x & (x-1)，该运算将 x 的二进制表示的最后一个 1 变成 0。因此，对 x 重复该操作，直到 x 变成 0，则操作次数即为 x 的「一比特数」
   * var countBits = function(num) {
      function changeToboundary(num) {
        let count = 0
        while(num) {
          num = num & (num - 1)
          count++
        }
        return count
      }
      const result = []
      for(let i = 0; i <= num; i++) {
        result.push(changeToboundary(i))
      }
      return result
    };
   */