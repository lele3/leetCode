/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }
  if (newInterval.length === 0) {
    return intervals;
  }
  let start = 0, end = 0;
  const min = newInterval[0]; // 开始值
  const max = newInterval[1]; // 结束值
  let flag1 = true, flag2 = true;
  // 1. 插入的值都在某个区间里
  for(let i = 0; i < intervals.length; i++) {
    const tmpMin = intervals[i][0];
    const tmpMax = intervals[i][1];
    if (tmpMin <= min && tmpMax >= min) {
      start = i;
      flag1 = false;
    }
    if (tmpMin <= max && tmpMax >= max) {
      end = i + 1;
      flag2 = false;
    }
  }
  
  const minArr = intervals[start];
  const maxArr = intervals[end - 1];
  let newArr = [];
  // 2. 开始值不在区间
  if (flag1) {
    // 直接将值 push 进第一位
    newArr.push(min);
    if (min < intervals[0][0]) {
      // 2.1 开始值在给定值的前面
      start = 0
    } else if (min > intervals[intervals.length - 1][1]) {
      // 2.2 开始值在给定值的后边
      start = intervals.length;
    } else {
      // 2.3 开始值在给定值之间， 但是不在所有区间
      for(let i = 0; i < intervals.length; i++) {
        const t1 = intervals[i];
        const t2 = intervals[i+1];
        if (t1[1] < min && t2[0] > min) {
          start = i + 1;
          break;
        }
      }
    }
  } else {
    // 开始值在某个区间
    if (minArr[0] < min) {
      newArr.push(minArr[0]);
    } else {
      newArr.push(min);
    }
  }
  
  // 3. 结束值不在某个区间里
  if (flag2) {
    // 直接 push 进第二位
    newArr.push(max);
    if (max > intervals[intervals.length - 1][1]) {
      // 3.1 结束值在给定值的后边
      end = intervals.length;
    } else if (max < intervals[0][0]){
      // 3.2 结束值在给定的前边
      end = 0;
    } else {
      // 3.3 结束值在给定值的之前， 但是不在任何区间
      for(let i = 0; i < intervals.length; i++) {
        const t1 = intervals[i];
        const t2 = intervals[i+1];
        if (t1[1] < max && t2[0] > max) {
          end = i + 1;
          break;
        }
      }
    } 
  } else {
    // 结束值在某个区间
    if (maxArr[1] > max) {
      newArr.push(maxArr[1]);
    } else {
      newArr.push(max)
    }
  }
  intervals.splice(start, end - start, newArr);
  return intervals;
};
// @lc code=end
