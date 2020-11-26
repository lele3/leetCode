/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) {
    return 0;
  }
  // nums.sort((a, b) => a - b);
  radix_sort(nums);
  console.log(nums)
  let max = 0;
  for(let i = 0; i < nums.length - 1; i++) {
    if (max < nums[i + 1] - nums[i]) {
      max = nums[i + 1] - nums[i];
    }
  }
  return max;
};

/**
 * 基数排序
 * 分别按照个位、十位 ... 最高位 分别放入 [1,2,3 .... 10] 的桶中进行排序 
 */
function radix_sort (arr) {
  // 取最大值 最大值的位数就是要循环遍历的次数
  const max = Math.max(...arr);
  // 定义一个桶
  const buckets = Array.from({length: 10}, () => []);
  // 定义当前要遍历的位数 个位、十位、百位 ...
  let m = 1;
  while(m <= max) {
    // 放入桶
    arr.forEach(number => {
      // digit 表示某位数的值
      const digit = Math.floor((number % (m * 10)) / m);
      // 把该位数的值放到桶buckets中
      // 通过索引确定顺序 类比计数排序
      buckets[digit].push(number);
    });

    // 从桶buckets中取值
    // 完成此步后 就完成了一次位数排序
    let ind = 0;
    buckets.forEach(bucket => {
      while(bucket.length > 0) {
        // shift从头部取值
        // 保证按照队列先入先出
        arr[ind++] = bucket.shift();
      }
    });

    // 每次最外层while循环后m要乘等10
    // 也就是要判断下一位 比如当前是个位 下次就要判断十位
    m *= 10;
  }
}
// @lc code=end

