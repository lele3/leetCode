/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  // 方法二 从初始站出发， 找到总路程中油量最少的加油站
  let gasTotal = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let minIndex = 0;
  for(let i = 0; i < gas.length; i++) {
    gasTotal += gas[i] - cost[i];
    if (gasTotal < min) {
      min = gasTotal;
      minIndex = i;
    }
  }
  return gasTotal < 0 ? -1 : (minIndex + 1) % gas.length;
};
// @lc code=end

/**
 * 方法一
 * 暴力循环
 * 
 * 以各个加油站为起点，试着向前走， 如果能回到原点
 * 那么则符合条件， 返回本次的起点加油站
 * 如果循环完成以后， 都没有能走完一圈的加油站
 * 则返回 -1
 * 
 * var canCompleteCircuit = function(gas, cost) {
    const gasNum = gas.length;
    let flag = false; // 转一圈汽油是否 >= 0
    let flag2 = false; // 记录是否调头， 只有在调头以后 i === j 才能说明转了一圈
    let i;
    for(i = 0; i < gasNum; i++) {
      let j = i;
      let gasolineTotal = 0;
      while(true) {
        gasolineTotal += gas[j] - cost[j];
        if (gasolineTotal < 0) {
          break;
        }
        j++; // 赶往下一站
        if (j === gasNum) { // 到达终点调头
          j = 0;
          flag2 = true;
        }
        if (flag2 && i === j) { // 此时循环一遍了
          if (gasolineTotal >= 0) {
            flag = true;
          }
          break;
        }
      }
      if (flag) {
        break;
      }
    }
    if (flag) {
      return i;
    } else {
      return -1;
    }
  };
 */