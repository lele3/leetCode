/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    /*
      方法一
      暴力解法，挨个循环遍历
      时间复杂度 O(n^2)

      ✔ Accepted
      ✔ 17/17 cases passed (372 ms)
      ✔ Your runtime beats 19.59 % of javascript submissions
      ✔ Your memory usage beats 52.58 % of javascript submissions (35 MB)

      const length = numbers.length
      for(let i = 0; i < length - 1; i++) {
        for(let j = i + 1; j < length; j++) {
          if(numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1]
          }
        }
      }
    */
    
    /*
      方法二
      时间复杂度我觉得是O(n), 但是执行时间比上边更垃圾，可能indexOf也需要遍历吧
      ✔ Accepted
      ✔ 17/17 cases passed (596 ms)
      ✔ Your runtime beats 5.01 % of javascript submissions
      ✔ Your memory usage beats 22.58 % of javascript submissions (35.2 MB)

      let tmp = index = min = max = 0
      for(let i = 0, len = numbers.length; i < len; i++) {
        tmp = target - numbers[i]
        index = numbers.indexOf(tmp)
        if(index > -1 && index !== i) {
          min = i > index ? index : i
          max = i > index ? i : index
          return [min + 1, max + 1]
        }
      }
    */
    
    /*
      方法三
      双指针法， 因为是已经排好序的，
      当首尾两个指针的和等于target时，满足条件，直接return
      当首尾两个指针的和小于target时，只有首指针向右移动，才有可能满足条件
      相反，当首尾两个指针的和大于target时，只有首指针向左移动，才有可能满足条件

      时间复杂度 O(n)
      ✔ Accepted
      ✔ 17/17 cases passed (80 ms)
      ✔ Your runtime beats 77.58 % of javascript submissions
      ✔ Your memory usage beats 34.84 % of javascript submissions (35 MB)


      let left = 0
      let right = numbers.length - 1
      let tmp = 0
      while (left < right) {
        tmp = numbers[left] + numbers[right]
        if(tmp === target) {
          return [left + 1, right + 1]
        } else if(tmp < target) {
          left++
        } else {
          right--
        }
      }
    */

    /*
      方法四
      利用hash值来存储

      时间复杂度O(n)
      空间复杂度O(n)
      ✔ Accepted
      ✔ 17/17 cases passed (84 ms)
      ✔ Your runtime beats 63.55 % of javascript submissions
      ✔ Your memory usage beats 19.68 % of javascript submissions (35.2 MB)
    */
    const map = new Map()
    let tmp = 0
    for(let i = 0, len = numbers.length; i < len; i++) {
      tmp = target - numbers[i]
      if(map.has(numbers[i])) {
        return [map.get(numbers[i]) + 1, i + 1]
      }
      map.set(tmp, i)
    }
};

