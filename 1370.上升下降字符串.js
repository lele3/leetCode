/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  // 桶计数
  const num = new Array(26).fill(0);
  for(let ch of s) {
    num[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }

  let ret = '';
  while(ret.length < s.length) {
    for(let i = 0; i < 26; i++) {
      if (num[i]) {
        ret += String.fromCharCode(i + 'a'.charCodeAt());
        num[i]--;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (num[i]) {
        ret += String.fromCharCode(i + 'a'.charCodeAt());
        num[i]--;
      }
    }
  }
  return ret;
};
// @lc code=end

/**
 * 方法一
 * 
 * 先将 s 转成数组并从小到大排序
 * 然后遍历去得到结果字符串
 * 
 * var sortString = function(s) {
    const sArr = s.split('').sort();
    let resultStr = '';
    while(sArr.length) {
      let minChar = sArr[0];
      resultStr += minChar;
      sArr.splice(0, 1);
      for(let i = 0; i < sArr.length; i++) {
        if (sArr[i] > minChar) {
          resultStr += sArr[i];
          minChar = sArr[i];
          sArr.splice(i, 1);
          i--;
        }
      }
      if (sArr.length === 0) break;
      let maxChar = sArr[sArr.length - 1];
      resultStr += maxChar;
      sArr.splice(sArr.length - 1, 1);
      for(let i = sArr.length - 1; i >= 0; i--) {
        if (sArr[i] < maxChar) {
          resultStr += sArr[i];
          maxChar = sArr[i];
          sArr.splice(i, 1);
          i++;
        }
      }
    }
    return resultStr;
  };
 */