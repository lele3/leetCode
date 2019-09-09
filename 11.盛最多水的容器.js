/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    
    let l = height.length - 1
    let j = 0
    /*
     方法一
     暴力解法
     使用双层循环，一个一个遍历，计算，取最大值

     时间复杂度 O(n^2)
    */ 

    // while(j < l) {
    //   for(let i = 0; i < l; i++) {
    //     let h = height[i] > height[l] ? height[l] : height[i]
    //     if(max < h * (l - i)) {
    //       max = h * (l - i)
    //     }
    //   }
    //   j++
    //   l--
    // }

    /*
      方法二
      思路
      利用双指针，比较首尾两根柱子的高度，取较小的一方
      如果是头部小，则头部指针加1
      反之，尾部指针减一
      每次循环求取值，将最大值缓存在max中

      时间复杂度 O(n)

      ✔ Accepted
      ✔ 50/50 cases passed (92 ms)
      ✔ Your runtime beats 64.13 % of javascript submissions
      ✔ Your memory usage beats 50.46 % of javascript submissions (35.5 MB)
    */
    let h = 0
    let w = 0 
    while (j < l) {
      w = l - j
      if(height[j] < height[l]) {
        h = height[j]
        j++
      } else {
        h = height[l]
        l--
      }
      if(max < h * w) {
        max = h * w
      }
    }
    return max
};

