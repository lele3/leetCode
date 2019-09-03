/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

    说明：

    你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

    示例 1:

    输入: [2,2,1]
    输出: 1
    示例 2:

    输入: [4,1,2,1,2]
    输出: 4

 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const hash = {}
    for(let num of nums) {
      if(!hash[num]) {
        hash[num] = 1
      } else {
        hash[num]++
      }
    }
    // const keys = Object.keys(hash)
    for(let key in hash) {
      if(hash[key] === 1) return key
    }
    /*
      方法三
      类似方法二，只不过把数组换成了对象

      执行时间也不怎么地
      ✔ Accepted
      ✔ 16/16 cases passed (96 ms)
      ✔ Your runtime beats 53.64 % of javascript submissions
      ✔ Your memory usage beats 6.34 % of javascript submissions (38.4 MB)
    */
};

/*
  方法一
    for(let num of nums) {
      if (nums.indexOf(num) === nums.lastIndexOf(num)) {
        return num
      }
    }

  思路
  利用 indexOf 和 lastIndexOf 是否相等，判断是否是数组中的唯一值

  执行时间垃圾的一匹
  ✔ Accepted
  ✔ 16/16 cases passed (732 ms)
  ✔ Your runtime beats 6.16 % of javascript submissions
  ✔ Your memory usage beats 40.27 % of javascript submissions (36.2 MB)

  方法二
    const hash = Array(50000).fill(0)
    nums.forEach(num => {
      hash[25000+num] ++
    })
    return hash.findIndex(item => item === 1) - 25000

  思路
  申请一个巨大的数组，根据值放置到这个数组中，相同的位置数据会变成非1
  最后找到这个值为1的索引就好了
  
  执行时间也很垃圾， 且不适用所有数据
  ✔ Accepted
  ✔ 16/16 cases passed (108 ms)
  ✔ Your runtime beats 45.17 % of javascript submissions
  ✔ Your memory usage beats 6.02 % of javascript submissions (38.5 MB)
 */
