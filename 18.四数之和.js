/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    /*
        Accepted
        282/282 cases passed (104 ms)
        Your runtime beats 97 % of javascript submissions
        Your memory usage beats 90.7 % of javascript submissions (36.3 MB)
    */
    nums.sort((a, b) => a - b)
    let len = nums.length
    let res = []
    for(let i = 0; i < len - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue
        for(let j = i + 1; j < len - 2; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue
            let left = j + 1
            let right = len - 1
            while(left < right) {
                if(nums[i] + nums[j] + nums[left] + nums[right] === target) {
                    
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    while(left<right && nums[left] === nums[left+1]){
                        left++
                    }
                    while(left<right && nums[right] === nums[right-1]){
                        right--
                    }
                    left++
                    right--
                } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return res
};

/*
    思路

    暴力解法
    四层循环找出符合条件的数组， 之后去重
    去重步骤如下
    先将每个数组排序， 将排好序的数组转成字符串，通过reduce方法去重，最后在将字符串转换成数组

    时间复杂度O(n^4)

    执行时间垃圾的要死
    Accepted
    282/282 cases passed (508 ms)
    Your runtime beats 14.94 % of javascript submissions
    Your memory usage beats 36.43 % of javascript submissions (37.5 MB)

    let length = nums.length
    let res = []
    for(let i = 0; i < length - 3; i++) {
        for(let j = i + 1; j < length - 2; j++) {
            for(let q = j + 1; q < length - 1; q++) {
                for(let p = q + 1; p < length; p++) {
                    if(nums[i] + nums[j] + nums[q] + nums[p] === target) {
                        res.push([nums[i], nums[j], nums[q], nums[p]])
                    }
                }
            }
        }
    }
    return res.map(item => JSON.stringify(item.sort()))
              .reduce((total, current) => {
                    if(total.indexOf(current) === -1) {
                        total.push(current)
                    }
                    return total
              },[])
              .map(item => JSON.parse(item))
*/
// @lc code=end

